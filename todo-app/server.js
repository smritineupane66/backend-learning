const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const path = require('path')


const app = express()

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }))   //to read form data

app.use(express.static('public'))  //for css



const getTodos = () => {
    const data = fs.readFileSync("todos.json", "utf-8");
    return JSON.parse(data);
};

//Homepage-list all todos
app.get('/', (req, res) => {
    const todos = getTodos();   //Reads from todos.json
    res.render('index', { todos })
})


// New todo form page 
app.get('/new', (req, res) => {
    res.render('new')
})


// create a new todo 
app.post("/new", (req, res) => {
    const todos = getTodos(); // Reads existing todos
    const newTodo = {
        id: todos.length ? todos[todos.length - 1].id + 1 : 1,
        title: req.body.title,
        completed: false
    };
    todos.push(newTodo);
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
    res.redirect("/");
});


//mark as completed
app.post('/complete/:id', (req, res) => {
    const todos = getTodos()
    const todo = todos.find(t => t.id === parseInt(req.params.id))
    if (!todo) {
        return res.status(404).send("Todo not completed")
    }
    todo.completed = true; //mark as completed
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
    res.redirect("/");


})

//delete

app.post('/delete/:id', (req, res) => {
    let todos = getTodos()

    todos = todos.filter(t => t.id !== parseInt(req.params.id))
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
    res.redirect("/");


})


app.listen(3000, () => {
    console.log("Server is listening at localhost:3000");

})