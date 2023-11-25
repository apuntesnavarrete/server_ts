import { Request, Response } from 'express';
//import { pool } from '../database';

export async function newJugador(req: Request, res: Response) {
     
    
    const {Id, Nombre} = req.body;
  
    const Foto = `/jug/${Id}.jpg` 
  
  const Jugador = {ID_FB:Id, Nombres:Nombre ,Foto }
  //enviar curp por condicional
  console.log(Jugador)
 //   await pool.query("INSERT INTO `registro global heroes` set ?",[Jugador])
  
      res.send("correcto")
    }
  