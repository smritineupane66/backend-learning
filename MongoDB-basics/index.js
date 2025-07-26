
const express = require('express');
require('dotenv').config();
const ConnectDb = require('./config/db')


const app = express()

//Connect to MongoDB
ConnectDb();


//middlewares and routes
app.use(express.json())



app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});