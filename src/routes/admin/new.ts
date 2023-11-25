import express from 'express';
import { newTorneo } from '../../models/models.newTorneo';


const router = express.Router()


router.post('/newTorneo', newTorneo);



export default router