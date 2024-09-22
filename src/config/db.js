const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.PASSWORD,
  database: 'tamagotchidb'
}).promise();


 db.connect(() => {
  try {
  console.log('MySQL connected');
}catch(error) {
  console.error("Error Connecting to MySql Database.")
}
});

async function ShowStats() {
  try {
const [rows] = await db.query("SELECT * FROM tamagotchi_stats");
console.log(rows);
return rows; 
  } catch(error) {
    console.error("An Error occured:", error);
  }
  }

  (async () => {
 await ShowStats();
  })().catch(err => {
    console.error("Error has occured:", err)
  });

  module.exports = db;