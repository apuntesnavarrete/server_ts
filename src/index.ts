import express from 'express';
import campeones from './routes/campeones'
import jornadas from './routes/Jornadas'

const path = require('path');




// Crear una instancia de Express
const app = express();

// Configurar el puerto en el que el servidor escuchará
const port = 3007;

app.use('/', campeones)

app.use('/', jornadas)


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