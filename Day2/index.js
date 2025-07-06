// Builtin-module 

// Node.js has a built-in module called fs to work with files 

// 1 using fs module 
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


// read,write,append,delete 

// const { error } = require('console');
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











