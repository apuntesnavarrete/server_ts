"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const campeones_1 = __importDefault(require("./routes/campeones"));
const path = require('path');
// Crear una instancia de Express
const app = (0, express_1.default)();
// Configurar el puerto en el que el servidor escuchará
const port = 3007;
app.use('/', campeones_1.default);
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.use(express_1.default.static(path.join(__dirname, 'dist')));
// Definir una ruta y su respuesta
app.use(express_1.default.static('dist'));
// Iniciar el servidor
app.listen(port, () => {
    console.log(`El servidor está escuchando en el puerto ${port}`);
});
