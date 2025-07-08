// Express 

// Express.js is a lightweight web framework built
// on top of Node.js that makes it easy to:
// Create HTTP servers
// Handle routes
// Manage requests and responses
// Use middleware

// npm install express   # install express


// Basic Routing 
// app.get() - Handle GET requests
// app.post() - Handle POST requests
// app.put() - Handle PUT requests
// app.delete() - Handle DELETE requests
// app.all() - Handle all HTTP methods



// Create first Express server

// import express from "express";
// const app = express();    //creates an express app object

// //Home route

// app.get("/", (req, res) => {
//     res.send("Welcome to Home page")
// })

// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");

// })


// express.js use res.send(),res.json() for response
// has easy middleware system built in



//  Add more routes (GET, POST, etc.)

// import express from "express"
// const app = express()

// app.get("/", (req, res) => {
//     res.send("This is Home page")
// })
// app.get("/about", (req, res) => {
//     res.send("This is About page")
// })
// app.post("/users", (req, res) => {
//     res.send("Post request")
// })
// app.put("/users", (req, res) => {
//     res.send("Put request for update")
// })
// app.delete("/users", (req, res) => {
//     res.send("Delete request for delete users")
// })
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");

// })



//  create and send an object in Express:

// Example:  Send a user object on a route

// req.params and req.query in Express
// Both are used to get data from the URL, but in different ways.


// import express from "express"
// const app = express()

// app.get("/user", (req, res) => {
//     const user = {
//         id: 1,
//         name: 'Smriti Neupane',
//         emai: 'smirtineupane197@gmail.com'
//     }

//     //  Print user object in terminal (console)
//     console.log("User object sent:", user);

//     // Send JSON response to client
//     res.json(user)
// })
// app.get('/user/:userId/books/:bookId',(req,res)=>{
//     res.send(`User Id ${req.params.userId} Book Id ${req.params.bookId}`)
// })
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");

// })





// Middleware in Express

// Middleware functions are the backbone of Express applications.

// They have access to:

// The request object (req)
// The response object (res)
// The next middleware function in the stack (next)


// Express includes several useful middleware functions:

// express.json() - Parse JSON request bodies
// express.urlencoded() - Parse URL-encoded request bodies
// express.static() - Serve static files
// express.Router() - Create modular route handlers