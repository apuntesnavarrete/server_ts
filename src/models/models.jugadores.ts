// models/jugadoresModel.ts
import { Request, Response } from 'express';
const {pool} = require('../database');

export async function obtenerJugadores(_req: Request, res: Response) {
  try {
    let consulta = 'SELECT * FROM `registro global heroes`';
    let data = await pool.query(consulta);
    res.send(data);
  } catch (error: any) {
    // Identifica el tipo de error
    const errorCode = error.code || 500;
  
    // Proporciona información sobre el error
    const errorMessage = error.message;
    const errorCause = error.cause;
  
    // Devuelve una respuesta JSON
    res.json({
      code: errorCode,
      message: errorMessage,
      cause: errorCause,
    });
  }
}