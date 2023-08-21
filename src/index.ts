import express, { Request, Response } from 'express';
import campeones from './routes/campeones'




// Crear una instancia de Express
const app = express();

// Configurar el puerto en el que el servidor escuchará
const port = 3007;

app.use('/campeones', campeones)

// Definir una ruta y su respuesta
app.get('/api', (_req: Request, res: Response) => {
    res.json({ 'users' : ["userOne", "usert", "userth","newuser"] });
  });

// Iniciar el servidor
app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});