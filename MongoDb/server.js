//  MongoDB



//connect to MongoDB

const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.use(express.json())


app.listen(8000, async () => {
    await mongoose.connect('mongodb+srv://smirtineupane197:SmritiAtlas%40123@myfirstcluster.wzksvlb.mongodb.net/testDB?retryWrites=true&w=majority&appName=MyFirstCluster')

    console.log('Server has Started');

    try {
        console.log('Connected to DB');
        

    } catch (error) {
        console.log(error);


    }
})


