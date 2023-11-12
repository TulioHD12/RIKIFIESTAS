const express = require('express');
const { Pool } = require('pg');

const app = express();
// Configurar el middleware para permitir CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // Esto permite solicitudes desde cualquier origen
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'rikifiestas',
  password: 'tulio',
  port: 5432, // Puerto predeterminado de PostgreSQL
});

// Ruta para obtener los datos de la tabla
app.get('/datos', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM servicios');
    res.json(result.rows);
    client.release();
  } catch (err) {
    console.error('Error al obtener datos', err);
    res.status(500).json({ error: 'Error al obtener datos' });
  }
});

const PORT = 3000; // Puerto en el que se ejecutará el servidor

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
