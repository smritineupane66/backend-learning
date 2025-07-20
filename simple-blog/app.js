const express = require('express')
const path = require('path')

const app = express()

app.set('view engine','ejs')

app.set('views',path.join(__dirname,'views'))

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.render("home",{})
})

app.get('/new',(req,res)=>{
    
})

app.listen(3000,()=>{
    console.log('Server is listening at localhost:3000');
    
})