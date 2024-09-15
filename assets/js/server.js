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
}).promise();

db.connect((error) => {
  if (error) throw error; 
  console.log('MySQL connected');
});

async function ShowStats() {
const [rows] = await db.query("SELECT * FROM tamagotchi_stats");
return rows; 
  }

  (async () => {
const hunger = await ShowStats();
console.log(hunger);
  })().catch(err => {
    console.error("Error has occured:", err)
  });

  app.get(/tamagotchi_stats/id)


