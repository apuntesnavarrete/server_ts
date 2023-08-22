import express, { Request, Response } from 'express';
const {pool} = require('../database');

const router = express.Router()


router.get('/api', async function(_req: Request, res: Response) {
  res.json({saludo:"hola"})
});

router.get('/api/campeones', async function(_req: Request, res: Response) {
  let consulta = "SELECT * FROM historial_campeones ORDER BY `fecha_campeonato` DESC LIMIT 1000"
 let vista = await pool.query(consulta)
  res.send(vista)
});


  

  export default router