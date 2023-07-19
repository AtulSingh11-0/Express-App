const express = require('express');
const app = express();
const port  = 5000;


// responds with 'Hello World' when a GET req is made at '/' route.
app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send('Welcome to the Route section');
    console.log(req.params);
});

// responds with a mssg when a GET req is made at '/about'
app.get('/about', (req, res) => {
    res.send('Welcome to the About section');
});

// responds with a mssg when a GET req is made at '/home'
app.get('/home', (req, res) => {
    res.send('Welcome to the Home page');
});

app.listen(port, () => {
    console.log(
        `App listening on port ${port}`
    );
});