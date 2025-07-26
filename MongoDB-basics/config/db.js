// Connect MongoDB to mongoose 

const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()   //load.env file 

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected Successfully");


    } catch (error) {
        console.log("Mongo Db connection failed", error);


    }
}
module.exports = ConnectDb;