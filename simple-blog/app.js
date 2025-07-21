const express = require('express')
const path = require('path')

const app = express()

let posts = [{ title: "My Day", content: "It was great." },
{ title: "Study", content: "Learned EJS." }];
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render("home", { posts })   //render home.ejs and send 'posts' to home.ejs
})

// New post form 
app.get('/new', (req, res) => {
    res.render("new")
})

//Handles post submission
app.post('/new', (req, res) => {
    const { title, content } = req.body;
    posts.push({ title, content })
    res.redirect('/')

})

app.listen(3000, () => {
    console.log('Server is listening at localhost:3000');

})