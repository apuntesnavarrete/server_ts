import campeones from './routes/campeones'
import jornadas from './routes/Jornadas'
import jugadores from './routes/jugadores'
import newtorneo from './routes/admin/new'
import JugadoresAdmin from './routes/admin/JugadoresAdmin'
import express, { Request, Response, NextFunction } from 'express';

import path from 'path';
//import bodyParser from 'body-parser';




// Crear una instancia de Express
const app = express();

// Configurar el puerto en el que el servidor escuchará
const port = 3007;

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');

  // Si la solicitud es un OPTIONS, responde con 200 OK
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});


app.use('/', campeones)

app.use('/', jornadas)

app.use('/', jugadores)
app.use('/api/admin', newtorneo);
app.use('/api/admin', JugadoresAdmin);


app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'dist')));

// Definir una ruta y su respuesta
app.use(express.static('dist'))
// Iniciar el servidor
app.listen(port, () => {
  console.log(`El servidor está escuchando en el puerto ${port}`);
});

