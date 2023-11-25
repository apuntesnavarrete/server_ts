import { Request, Response } from 'express';
//import { pool } from '../database';

export async function newTorneo(req: Request, res: Response) {
     

    const user = req.body;    
    console.log(user)   
      res.send("correcto")
    }
  