import express from 'express';
import { obtenerJugadores } from '../models/models.jugadores';

const router = express.Router()

router.get('/api/jugadores', obtenerJugadores)
  

  export default router