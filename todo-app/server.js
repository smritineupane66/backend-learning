const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

const getTodos = () => {
    const data = fs.readFileSync("todos.json", "utf-8");
    return JSON.parse(data);
};

app.get('/',(req,res)=>{
    const todos = getTodos();
    res.render('index',{todos})
})

app.get('/new',(req,res)=>{
    res.render('new')
})

app.post('/new', (req, res) => {
    const todos = getTodos(); 
    const { title, completed } = req.body;
    const newTodo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,    //assign a unique id to every new posts
        title,
        completed
    };
    todos.push(newTodo);
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));

});



app.listen(3000, () => {
    console.log("Server is listening at localhost:3000");

})