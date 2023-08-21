import express, { Request, Response } from 'express';

const router = express.Router()

router.get('/', (_req: Request, res: Response) => {
    res.json({ 'users' : ["campeon1", "campeon 2", "c3","c4"] });
  });


  
router.post('/', (_req: Request, res: Response) => {
    res.json({ 'users' : ["campeon1", "campeon 2", "c3","c4"] });
  });

  export default router