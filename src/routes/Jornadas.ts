
import express, { Request, Response } from 'express';
const {pool} = require('../database');

const router = express.Router()

router.get('/api/jornadas', async function(_req: Request, res: Response) {
    res.json({saludo:"hola seccion jornadas"})
  });
  

  
router.get('/api/jornadas/:liga/:categoria', async (req: Request, res: Response) => {
    // Obtención del id del campeón
    //pamars recibe como string y hay que convertirlo en number.
   // const id: number = parseInt(req.params.id, 10);
  
   // console.log(id)
    // Validación 
    const categoria = req.params.categoria
    const liga = req.params.liga
    

    const consulta_filter: string = `SELECT * FROM tournaments_leagues_view WHERE shortened_brand_name = '${liga}' AND category = '${categoria}';`


    const resultados_filter: any[] = await pool.query(consulta_filter).catch((error: Error) => {
        if (error.message.includes("ER_NO_SUCH_TABLE")) {
            // La tabla no existe
            res.status(404).send('La tabla no existe');
        } else {
            // Otro error
            res.status(500).send('error inesperado , revise su direccion');
        }
    });


    const tournamentNames = resultados_filter.map((tournament) => tournament.name_tournament);


   const torneo_actual = tournamentNames[tournamentNames.length-1]
  
    // Consulta SQL para buscar el campeón
    const consulta: string = "SELECT * FROM `futbolce_zon58`.`" + liga + "_jor_" + categoria + "_" + torneo_actual +"` LIMIT 1000";



const resultados: any[] = await pool.query(consulta).catch((error: Error) => {
    if (error.message.includes("ER_NO_SUCH_TABLE")) {
        // La tabla no existe
        res.status(404).send('La tabla no existe');
    } else {
        // Otro error
        res.status(500).send('error inesperado , revise su direccion');
    }
});
  
    

 
        res.json(resultados)
   
   // SELECT * FROM `futbolce_zon58`.`ed_jor_sub23_c23` LIMIT 1000;

  });



export default router