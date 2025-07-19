// Simple Blog with Login & Posts

const express = require('express')
const session = require('express-session')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const { error } = require('console')

const app = express()



app.set('view engine', 'ejs')  //set Ejs as view engine
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

//session middleware
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
}))



app.use(express.urlencoded({ extended: true }))

//Read all the post from posts.json
function getPosts() {
    const data = fs.readFileSync("posts.json");
    return JSON.parse(data);
}

// middleware to check logged in 
function isloggedin(req, res, next) {
    if (req.session.username) {
        next()
    } else {
        res.redirect('/login')
    }
}

// Routes 
app.get("/", (req, res) => {
  const posts = getPosts();
  res.render("index", { posts, username: req.session.username });
});


//show login form
app.get('/login', (req, res) => {
    res.render("login", { error: null })
})

//handle login

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'smriti'&& password === '1234') {
        req.session.username = username;
        res.redirect('/')
    } else {
        res.render("login", { error: 'Invalid Credentials' })
    }
})

//logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
})


// Show single post with dynamic routing
app.get('/posts/:id', (req, res) => {
    const posts = getPosts();
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId)
    if (post) {
        res.render('post', { post, username: req.session.username })

    } else {
        res.status(404), send("Post not found")

    }
})

// show form to create new post 
app.get("/new", isloggedin, (req, res) => {
    res.render("new", { username: req.session.username });
});


// Handle form POST to create new blog post
app.post("/new", isloggedin, (req, res) => {
    const posts = getPosts();

    const newPost = {
        id: posts.length ? posts[posts.length - 1].id + 1 : 1,
        title: req.body.title,
        content: req.body.content
    };

    posts.push(newPost);

    fs.writeFileSync("posts.json", JSON.stringify(posts, null, 2));
    res.redirect("/");
});




app.listen(3000, () => {
    console.log('Server is listening at localhost:3000');

})