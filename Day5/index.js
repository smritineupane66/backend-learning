
// What is req.query?
// req.query lets you access query parameters in the URL
// used commonly for searching,filtering 


// import express from "express"
// const app = express()

// app.get("/user", (req, res) => {
//     const { role, age, name } = req.query;

//     const users = [
//         { name: 'Smriti', role: 'Developer', age: 21 },
//         { name: 'Sita', role: 'Designer', age: 20 },
//         { name: 'Hari', role: 'Designer', age: 20 },
//         { name: 'Smriti', role: 'Designer', age: 21 },

//     ]
//     const filtering = users.filter(user => {
//         return (!role || user.role === role)
//             &&
//             (!age || user.age === parseInt(age))
//             &&
//             (!name || user.name === name)




//     })
//     res.json(filtering)
//     console.log("Query received:", req.query);

// }
// )

// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");

// })

// Why we use req.params, req.body, and req.query
// URL path acess using req.params.id example /users/1
// Query string acess using req.query.name example /users?name=Smriti
// Request body is acess using req.body.name example {"name":"smriti"}

// For req.body → use POST or PATCH → set Body → raw → JSON

// For req.query → use URL like /users?role=admin (GET, POST, any method)




// Create a REST API for Users

import express from "express";
const app = express()

app.use(express.json())

const users = [
    { id: 1, name: 'smriti' },
    { id: 2, name: 'sita' },
    { id: 3, name: 'hari' },

]

app.get('/', (req, res) => {
    res.send("Welcome to users API")
})

// GET all users
app.get('/users', (req, res) => {
    console.log("Query recieved", req.query);
    res.json(users)

})

// Get by id 
app.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)
    // res.status(404).send("User not found")
    if (!user) return res.status(404).send("User not found");
    console.log(" User fetched:", user);
    res.json(user);
})


// POST create new user
app.post('/users', (req, res) => {
    console.log(" JSON received:", req.body);
    //     const newuser = {
    //         id: users.length + 1,
    //         name: req.body.name,



    //     }
    //     console.log(req.body);
    //     console.log(newuser);
    //     res.status(201).json(newuser)



    // })
    // OR we can also do this method (accept multiple users as array and add IDs in a loop)

    const newuser = req.body;
    newuser.forEach(user => {
        user.id = users.length + 1,
            users.push(user)

    });
    res.status(201).json(newuser)

})


// Update user by ID 
app.patch("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const user = users.find(u => u.id === id)

    if (!user)
        return res.status(404).send("User not found")

    if (req.body.name) user.name = req.body.name;

    console.log("Updated user:", user);

    res.json(user)
})


// Delete 

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const index = users.findIndex(u => u.id === id)

    if (index === -1)
        return res.status(404).send("User not found")

    const deleteduser = users.splice(index, 1)
    console.log('Deleted user:', deleteduser);

    res.send("User deleted Successfully")

})



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");

})