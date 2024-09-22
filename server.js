const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3000;

const tamagotchiRoutes = require('./src/routes/tamagotchiRoutes');
 
app.use(express.json());

app.use(cors({
  origin: 'http://127.0.0.1:5500', 
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], 
  allowedHeaders: ['Content-Type'] 
}));

app.use('/api/tamagotchi', 'tamagotchiRoutes')

app.listen(
  PORT, 
  () => console.log(`Server is Running On http://localhost:${PORT}`)
)






