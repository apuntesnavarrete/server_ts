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


router.get('/api/campeones/jugadores', async function(_req: Request, res: Response) {
  let consulta = "SELECT * FROM Jugadores_campeones_view"
 let vista = await pool.query(consulta)
  res.send(vista)
});


router.get('/api/campeones/:id', async (req: Request, res: Response) => {
  // Obtención del id del campeón
  //pamars recibe como string y hay que convertirlo en number.
  const id: number = parseInt(req.params.id, 10);

  // Validación del id del campeón
  if (!Number.isInteger(id) || id < 1) {
    res.status(400).send('El id del campeón debe ser un número entero mayor que 0');
    return;
  }

  // Consulta SQL para buscar el campeón
  const consulta: string = `SELECT * FROM historial_campeones WHERE id_campeonato = ${id}`;

  // Ejecución de la consulta
  const resultados: any[] = await pool.query(consulta);

  // Envío de la respuesta
  if (resultados.length > 0) {
    res.json(resultados[0]);
  } else {
    res.status(404).send('No se encontró el campeón');
  }
});


router.get('/api/campeones/jugadores/:id', async (req: Request, res: Response) => {
  // Obtención del id del campeón
  //pamars recibe como string y hay que convertirlo en number.
  const id: number = parseInt(req.params.id, 10);

  // Validación del id del campeón
  if (!Number.isInteger(id) || id < 1) {
    res.status(400).send('El id del campeónato debe ser un número entero mayor que 0');
    return;
  }

  // Consulta SQL para buscar el campeón
  const consulta: string = `SELECT * FROM Jugadores_campeones_view WHERE Id_campeonato = ${id}`;

  // Ejecución de la consulta
  const resultados: any[] = await pool.query(consulta);


  // Envío de la respuesta
  if (resultados.length > 0) {
    res.json(resultados);
  } else {
    res.status(404).send('No se encontró el campeón');
  }
});

  

  

  export default router