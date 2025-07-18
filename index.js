// // Form handling and working with forms
// const express = require('express')
// const path = require('path')

// const app = express() //to add middleware like express.json() , express.urlencoded()

// //serve static files from 'public' folder
// app.use(express.static(path.join(__dirname, 'public')))

// //parse form data:converting raw data into readable and usable format
// app.use(express.urlencoded({ extended: true }))


// app.post('/submit', (req, res) => {
//     const { username } = req.body;
//     const { email } = req.body;

//     res.send(`Hello,${username} and your email ${email} Form Submitted Successfully`)

// })

// app.listen(3000, () => {
//     console.log("Server running at http://localhost:3000");
// })


// Session-Cookie 

// Cookie: small text files stored in browser
// Sent to server on every request to identify user or store small data.

// const express = require('express')
// const cookies = require('cookie-parser')
// const app = express()

// app.use(cookies())

// app.get('/set-cookie',(req,res)=>{
//     res.cookie('username', 'Smriti', { maxAge: 1000 *60* 2 }); //2 minute
//     res.send('Cookie is set')
// })
// app.get('/get-cookie',(req,res)=>{
//     const username  = req.cookies.username;
//     res.send(`Cookie value:${username}  set`)

// })
// app.get('/clear-cookie', (req, res) => {
//   res.clearCookie('username');
//   res.send('Cookie cleared');
// });

// app.listen(3000, () => {
//   console.log("Server running at http://localhost:3000");
// });


// Sessions 
// Cookies alone are not secure for storing sensitive data like:
// User ID
// Login status
// Cart data

// Because they’re stored in the browser and users can see or modify them.

// Instead, we store only a session ID in the cookie.
//  The server then uses that ID to fetch real data from memory or database.


const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.get('/', (req, res) => {
      console.log("Session data:", req.session);
  if (req.session.username) {
    res.send(`<h2>Welcome ${req.session.username}!</h2><a href="/logout">Logout</a>`);
  } else {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'smriti' && password === '1234') {
    req.session.username = username;
    res.redirect('/');
  } else {
    res.send('<h3>Invalid credentials</h3><a href="/">Try again</a>');
  }
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
