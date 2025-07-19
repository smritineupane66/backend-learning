const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

const user = {
    username: "hari",
    password: "1234",
    name: "Hari",
    email: "smirtineupane197@gmail.com",
    role: "student"
};

app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
}));

app.set("view engine", "ejs");

// Show login form
app.get('/', (req, res) => {
    res.render("login", { error: null });
});

// Handle login POST
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === user.username && password === user.password) {
        req.session.user = user;
        res.redirect('/dashboard');
    } else {
        res.render("login", { error: "Invalid credentials" });
    }
});

// Show dashboard only if logged in
app.get('/dashboard', (req, res) => {
    if (req.session.user) {
        res.render("dashboard", { user: req.session.user });
    } else {
        res.redirect('/');
    }
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
