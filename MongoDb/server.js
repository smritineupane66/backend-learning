//  What is MongoDB?
// MongoDB is a NoSQL database that stores data
//  in JSON-like documents called BSON (Binary JSON).
// Instead of rows and tables like SQL, 
// it uses collections and documents.


//  What is Mongoose ?
//     Mongoose is an ODM(Object Data Modeling) library for MongoDB in Node.js.
// It helps you define schemas and models and makes interacting with MongoDB easier.


const mongoose = require('mongoose')

//connect to MongoDB

mongoose.connect("mongodb://localhost:27017/testDB")
 .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(" Connection error", err));

//define schemas

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const User = mongoose.model("User", userSchema)


//Insert Data

const user = new User({ name: 'smriti', age: 21 })
user.save()
    .then(() => console.log("User Inserted "))
    .catch((err) => console.log("Error", err)
    )

User.find()
    .then(users => console.log(" All Users:", users))
    .catch(err => console.log(" Fetch error", err));