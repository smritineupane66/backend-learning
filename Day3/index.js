// const http = require('http')

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/plain'})
//     res.write("Hello user\n")
//     res.end("End")
//     console.log(req);
//     console.log(req.method);


// })

// server.listen(3000,()=>{
//     console.log("Server is listening at port 3000");

// })
// chalirako port lai destroy garna we use kill-port 
//  Sometimes, the port (like 3000) gets stuck or busy.
// killport lets you free that port so you can run your server again.


// npm start → for normal run

// npm run dev → for development with auto-reload


// Simple HTTP Method Handling in Node.js

// const http = require('http')
// const server = http.createServer((req, res) => {
//     const url = req.url;
//     const method = req.method;

//     if (url === "/user") {
//         if (method === 'GET') {
//             res.writeHead(200, { 'Content-type': 'text/html' })
//             res.write("<h1>Hello user </h1>")
//             res.end()
//         }


//     } else if (url === '/about') {
//         if (method === 'POST') {
//             res.writeHead(200, { 'Content-type': 'text/html' })
//             res.write("<h1>Hello about </h1>")
//             res.end()

//         }


//     } else if (url === '/contact') {
//         if (method === 'PATCH') {
//             res.writeHead(200, { 'Content-type': 'text/html' })
//             res.write("<h1>Hello contact </h1>")
//             res.end()

//         }

//     }else{
//         res.writeHead(404, { 'Content-type': 'text/plain' });
//     res.end(" Route not found");


//     }

// })
// server.listen(5000, () => {
//     console.log("Server is running at local host 5000");
// })


// do same using switch 

// import http from "http"
// const server = http.createServer((req, res) => {
//     const url = req.url
//     const method = req.method
//     const routekey = `${method} ${url}`;

//     switch (routekey) {
//         case 'GET /':
//             res.end("Get request")
//             break;
//               case 'GET /users':
//             res.end("Get request")
//             break;
//            case 'POST /users':
//             res.end("post request")
//             break;
//             case 'PATCH /about':
//             res.end("patch request")
//             break;
//             case 'Delete /users':
//             res.end("delete request")
//             break; 

//             default:
//                 res.writeHead(200,{'Content-type':'text/plain'})
//                 res.end("not allowed")
//     }


// })
// server.listen(3000,()=>{
//     console.log("server is listening at local host 3000");

// })




// Npm and yarn cli commands

// 1 initialize project 
// Create package.json
// in npm we do:	npm init (or) npm init -y
// in yarn we do :	yarn init

// 2 install package in npm
// npm:npm install chalk 
// instal dev dependency:npm install nodemon --save-dev 
// install all from package.json : npm install 

// 3 remove packagenpm:npm uninstall chalk


// 4 // update package:
// npm:npm update chalk 

// 5 run scripts 
// npm:npm run start or npm run dev 



//  What is chalk?
// Chalk is a Node.js library used to style your
// terminal output with colors and formatting like
// bold, underline, etc.
// npm install chalk in terminal



// import chalk from "chalk";
// console.log(chalk.blue('hello'));
// console.log(chalk.green('hello smriti'));
// console.log(chalk.red.bold('error occured'));
// console.log(chalk.red.underline('error occured'));


// if we do npm remove chalk then it will be remove in nodemodules and package.json

// If using require()	 Works by default with .js
// If using import	 Needs .mjs or "type": "module" in package.json


// winston = powerful logging library in nodejs


// Better than just using console.log()

// You can control levels: info, warn, error, etc.

// Log to multiple places at once (e.g., file + console)

// Supports log formatting, timestamps, JSON, etc.


// npm install winston : in terminal

// it consist of 3 parts:
// 1 level= define what kind of message to log(info,warn,error)
// 2 format = control how log message look (json format,plaintetx)
// 3 transports = where to send logs (console or remote server )

// import winston  from "winston"
// const logger = winston.createLogger({
//     level:'info',
//     format:winston.format.simple(),
//     transports:[
//         new winston.transports.File({filename:'log.txt'}),
//         new winston.transports.Console()
//     ]
// })
// logger.info('info:server started')
// logger.warn('warn:server warned')
// logger.error('error:server has error')




// add timestamps in logs

// import winston from 'winston'
// const logger = new (winston.createLogger)({
//     level: 'info',
//     format: winston.format.combine(
//         winston.format.timestamp(),
//         winston.format.printf(info => {
//             return `${info.timestamp} [${info.level}:[${info.message}]]`
//         })

//     ),
//     transports: [
//         new winston.transports.Console({
//             format: winston.format.combine(
//                 winston.format.colorize(),
//                 winston.format.simple()
//             )
//         }),
//         new winston.transports.File({filename: 'log.txt'})
//     ]

// })
// logger.info(' Info: Server is running');
// logger.warn('Warning: Low memory');
// logger.error(' Error: Unable to connect to DB');



// import winston from "winston"
// const logger = new (winston.createLogger)({
//     transports:[
//         new(winston.transports.File)({
//             name:'info-file',
//             filename:'filelog-info.log',
//             level:'info'
//         }),
//           new(winston.transports.File)({
//             name:'warn-file',
//             filename:'filelog-warn.log',
//             level:'warn'
//         }),
//          new(winston.transports.File)({
//             name:'error-file',
//             filename:'filelog-error.log',
//             level:'error'
//         })

//     ]
// })
// logger.info("this is info message")
// logger.warn("this is a warning")
// logger.error("this is an error")


// so
// filelog-info.log gets all 3 logs

// filelog-warn.log gets warn and error

// filelog-error.log gets only error 


// que to practice 

// Create a server that handles 3 routes using switch:

// /: Home

// /about: About

// /user: GET method

// Create a POST request route using req.method and test it in Postman.

// Use nodemon to run your server and test if it reloads on saving.


// import http from "http";
// const server = http.createServer((req, res) => {
//     const routekey = `${req.method} ${req.url}`

//     switch (routekey) {
//         case ' GET /':
//             res.end("Home")
//             break;

//         case ' GET /about':
//             res.end("about")
//             break;

//         case ' GET /user ':
//             console.log("user");
//             break;


//         case 'POST ':
//             console.log(req.method);
//             break;


//         default:
//             res.writeHead(404, { "Content-Type": "text/plain" });
//             res.end(" Route Not Found");

//     }

// })



// server.listen(3000, () => {
//     console.log("server is running at local host 3000");

// })




import winston from "winston"
const logger = new (winston.createLogger)({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}] ${info.message}`)
    ),
    transports: [
        new (winston.transports.File)({
            filename: 'info.log',
            level: 'info'

        }),
        new (winston.transports.File)({
            filename: 'warn.log',
            level: 'warn'
        }),
        new (winston.transports.File)({
            filename: 'error.log',
            level: 'error'
        }),

    ]
})
logger.info("info:message on server start")
logger.warn("warn:invalid route")
logger.error("error:server crash")