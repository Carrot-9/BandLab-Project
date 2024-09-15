const express = require('express'); 

const app = express();

const PORT = 3000;

app.listen(
    PORT, 
    () => console.log(`Server is Running On http://localhost:${PORT}`)
)

const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.password,
  database: 'tamagotchidb'
});

db.connect((error) => {
  if (error) throw error; 
  console.log('MySQL connected');
});


