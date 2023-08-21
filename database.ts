const mysql = require('mysql2');
require('dotenv').config();
/*
const setupModels = require('../db/models/user.model')
*/

const pool = mysql.createPool({
  host     : process.env.HOST,
       user     : process.env.DB_USER,
       password : process.env.DB_PASSWORD,
       database : process.env.DB_DATABASE
  // solo de uso local , modificar git ignore
});


pool.getConnection((error: any, connection: { release: () => void; }) => {
  if (error) {
    console.error('Error al conectarse a la base de datos: ', error);
    return;
  }
  console.log('Conexión exitosa a la base de datos rds aws');
  connection.release();
});

pool.query = (query: any, values: any) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((error: any, connection: {
            query: (arg0: any, arg1: any, arg2: (error: any, results: any /*
const setupModels = require('../db/models/user.model')
*/) => void) => void; release: () => void;
        }) => {
      if (error) {
        reject(error);
        return;
      }

      connection.query(query, values, (error, results) => {
        connection.release();
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  });
};

process.on('exit', () => {
  pool.end();
});

  module.exports = {pool}