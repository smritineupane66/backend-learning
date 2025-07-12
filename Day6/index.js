import express from 'express'
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';



import logger from './middleware/logger.js'
import authenticate from './middleware/validate.js'
import errorhandler from './middleware/errorhandler.js'
 

const app = express()
app.use(express.json())   //Builtin middleware

// 3rd party middleware
app.use(morgan('combined'));   // logs method, URL, status, response time
app.use(cors());          // adds security-related HTTP headers
app.use(helmet());         // allows requests from other origins (like frontend apps)


// Apply logger middleware to all requests
app.use(logger)            //custom middleware


app.get('/', (req, res) => {
    console.log('Welcome to Middleware');
     res.send("This is Home Page")


})

app.get('/users', (req, res) => {
    console.log('Welcome to user Middleware');
        res.send("This is Users Page")


})

// Protected route
app.get("/profile",authenticate,(req,res)=>{
    res.send("This is your profile")
    

})

// Route that throws an error
app.get('/error',(req,res,next)=>{
   throw new Error("Manual error for testing");

})

app.use(errorhandler)   // Register error-handling middleware last


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})



