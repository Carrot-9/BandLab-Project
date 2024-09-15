const express = require('express'); 
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

const PORT = 3000;

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

  app.get('/' , (req, res) => {
    res.send("Hello World!")
  });

  app.get('/hunger/:id', (req,res) => {
    const id = req.params.id;
    db.query('SELECT hunger FROM tamagotchi_stats WHERE id = ?', [id],(error, results) => {
      if(error) {
        console.error("Database Connection Error")
        return res.status(500).json({error: 'Database query error'});
      }
      if(results.length === 0) {
        console.error("hunger does not exist.")
        return res.status(404).json({error: 'hunger does not exist.'});
      }
      res.json(results[0]);
    });
  });

  app.listen(
    PORT, 
    () => console.log(`Server is Running On http://localhost:${PORT}`)
)



