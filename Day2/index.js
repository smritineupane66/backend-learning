// Builtin-module

// Node.js has a built-in module called fs to work with files


// The OS Module
// const { log } = require('console');
// const os = require('os')

// const systemuptime = os.uptime()

// const userInfo = os.userInfo()

// const otherInfo = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(systemuptime);
// console.log(userInfo);
// console.log(otherInfo);


// The PATH Module
// const path = require('path')

// const mypath = 'backend-learning\Day2\index.js'

// const pathInfo = {
//     fileName: path.basename(mypath),
//     foldername: path.dirname(mypath),
//     fileExtension: path.extname(mypath),
//     absoluteorNot: path.isAbsolute(mypath),
//     detailInfo: path.parse(mypath)

// }
// console.log(pathInfo);
// console.log(path.join('grandParentFolder', 'parentFolder', 'child.txt'))
// console.log(path.resolve('grandParentFolder', 'parentFolder', 'child.txt'))




// The FS Module
// const fs = require('fs')
// fs.writeFileSync('day1.txt','Hello User')
// console.log("File created successfully");


// 2 Fs.writeFile()

// const fs = require ('fs')
// fs.writeFile('user.txt',"hello user" , (error)=>{
// if(error){
//     console.log("Erro creating file",error);

// }else{
//     console.log("File created successfully");

// }
// })


// / {flag: 'a'} indicates the writeFile() method to append 
// the data at the end of the file instead of erasing the 
// previous data present in it.

// const fs = require('fs')
// fs.writeFile('user.txt', "Hi,this is newFile.txt",{flag: 'a'}, (error) => {
//     if (error) {
//         console.log(error);


//     } else {
//         console.log('Writen to file successfully');


//     }
// })




// read,write,append,delete

// const fs = require('fs')
// fs.writeFileSync('user.txt',"Hello user")
// console.log("File created successfully");

// //write file
// fs.writeFile('user.txt',"Hi",(error)=>{
//     if(error){
//         console.log("error",error);

//     }else{
//         console.log("File created and written");

//     }
// })
// //read file
// fs.readFile('user.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log("Error occured",err);

//     }else{
//             console.log(data);
//     }


// })

// //append file
// fs.appendFile('user.txt','backend learning',(error)=>{
//     if(error){
//         console.log("error occurred",error);

//     }else{
//     console.log("append");


//     }

// })

// //delete file
// fs.unlink('user.txt',(error)=>{
//     if(error){
//         console.log("Delete error",error)

//     }else{
//         console.log("File deleted successfully")

//     }
// })

// How to read the contents of a directory using fs.readdir()

// The readdir() function accepts 2 parameters:

// The path of the folder whose contents are to be read.
// Callback function.

// const fs = require('fs')
// fs.readdir('D:/Nodejs-workshop/backend-learning/Day2',(error,files)=>{
//     if (error) {
//         console.log(error);
//         return;


//     }  
//     console.log('Directory read successfully');
//     console.log(files);


// })



// url

// const url = new URL("https://google.com/huddleNepal")

// console.log(url.protocol);
// console.log(url.hostname);
// console.log(url.origin);
// console.log(url.password);
// console.log(url.href);
// console.log(url.port);
// console.log(url.pathname);


// const url = require('url')
// const newUrl = url.format({
//   protocol: 'https',
//   hostname: 'smriti.com',
//   pathname: '/about',
//   query: {
//     user: 'smriti',
//     lang: 'en'
//   }
// });

// console.log(newUrl);





// Event-Driven Programming

// const event = require('events')
// const myEmitter = new event()

// // Listener Function 1: display
// const display = ()=>{
//     console.log('Hi, Welcome to server');

// }

// // Listener Function 2: output
// const output = ()=>{
//     console.log('Hi, Welcome to output');

// }

// // Subscribing to `userJoined` event
// myEmitter.on('userJoined',display)
// // there can be multiple on for single emit()
// myEmitter.on('userJoined',output)


// // Emiting the `userJoined` Event
// myEmitter.emit('userJoined')




// Project: Login Alert System using EventEmitter


// const EventEmitter = require('events')

// const myEmitter = new EventEmitter()

// const userLoggedin = (name, age) => {

//     console.log(`your age: ${age}`);

//     console.log(`welcome , ${name}! You have successfully loggrd in.`);


// }
// myEmitter.on('Loggedin', userLoggedin)

// myEmitter.emit('Loggedin', 'Smriti', 21)




// The HTTP Module:allow communication betwee client and server.


// creating http server


// const http = require('http')

// // //creating server

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-type':'text/plain'})
//     res.write("Hello user\n")
//     res.end("End")
// })

// server.listen(3000,()=>{
//     console.log("Server is listening at port 3000");

// })


// const { error } = require('console');
// const http = require('http')
// const server = http.createServer((req,res)=>{
// let url = req.url
//     if(req.url==="/"){
//         console.log("url is open");

//     }else if (req.url==="/about"){
//         console.log("About page");

//     }
//     else if (req.url==="/contact"){
//         console.log("Contact page");

//     }else{
//         console.log("error");


//     }
// })

// server.listen(3000,()=>{
//     console.log("Server is listening at port 3000");

// })


// You can also write all data in res.end()
//  directly without res.write():

// Basic Routing Server

// const http = require('http')
// const server = http.createServer((req, res) => {
//     let url = req.url;
//     if (url === '/') {
//         res.writeHead(200, { 'Content-type': 'text/html' })
//         res.write('<h1>Welcome to home page </h1>')
//         res.end()

//     } else if (url === '/about') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write('<h1>Welcome to about page</h1>')
//         res.end()

//     }
//     else if (url === '/contact') {
//         res.writeHead(200, { 'content-type': 'text/html' })
//         res.write('<h1>Welcome to contact page</h1>')
//         res.end()

//     } else if (url === '/users') {
//         let users = {
//             name: 'smriti',
//             role: 'backend developer'
//         }
//         res.writeHead(200, { 'content-type': 'application/json' })
//         res.end(JSON.stringify(users))
//         res.end()

//     }
//     else {
//         res.writeHead(400, { 'content-type': 'text/plain' })
//         res.end("page not found")
//     }
// })


// server.listen(3000, () => {
//     console.log("Server is listening at port 3000");

// })











