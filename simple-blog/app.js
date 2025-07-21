const express = require('express')
const path = require('path')

const app = express()

let posts = [{ id: 1, title: "My Day", content: "It was great." },
{ id: 2, title: "Study", content: "Learned EJS." }];


app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))


//Show all posts
app.get('/', (req, res) => {
    res.render("home", { posts })   //render home.ejs and send 'posts' to home.ejs
})

// New post form 
app.get('/new', (req, res) => {   //when we clicks add new post it goes to /new and loads new.ejs
    res.render("new")
})

//Handles post submission

app.post('/new', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,    //assign a unique id to every new posts
        title,
        content
    };
    posts.push(newPost);
    res.redirect('/');
});




//Show edit form
app.get('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(p => p.id === id)
    if (!post) {
        return res.send("Post not found")
    }
    res.render('edit', { post })




})

//Update post

app.post('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const post = posts.find(p => p.id === id)
    if (!post)
        return res.send("Post not found")
    post.title = req.body.title;
    post.content = req.body.content
    res.redirect('/')
});


//delete post
app.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const index = posts.findIndex(p => p.id === id)

    if (index === -1) return res.status(404).send("posts not found")
    const deletedindex = posts.splice(index, 1)
    console.log("deleted successfuly", deletedindex);
    res.end("Deleted successfully")



})


app.listen(5000, () => {
    console.log('Server is listening at localhost:5000');

})