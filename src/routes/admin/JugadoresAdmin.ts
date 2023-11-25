import express from 'express';
import { newJugador } from '../../models/models.jugadoresAdmin';


const router = express.Router()


router.post('/Jugadores', newJugador);



export default router