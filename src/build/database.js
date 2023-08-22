"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2');
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const envPath = path_1.default.resolve(__dirname, '.env');
dotenv_1.default.config({ path: envPath });
/*
const setupModels = require('../db/models/user.model')
*/
const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
    // solo de uso local , modificar git ignore
});
pool.getConnection((error, connection) => {
    if (error) {
        console.error('Error al conectarse a la base de datos: ', error);
        console.log(process.env); // Verifica si las variables se han cargado
        return;
    }
    console.log('Conexión exitosa a la base de datos rds aws');
    connection.release();
});
pool.query = (query, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error);
                return;
            }
            connection.query(query, values, (error, results) => {
                connection.release();
                if (error) {
                    reject(error);
                }
                else {
                    resolve(results);
                }
            });
        });
    });
};
process.on('exit', () => {
    pool.end();
});
module.exports = { pool };
