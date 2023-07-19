const express = require('express');
const app = express();
const PORT = 5000;

app.route('/book')
    .get((req, res) => {
        res.send('Get a random Book');
    })
    .post((req, res) => {
        res.send('Add a Book');
    })
    .put((req, res) => {
        res.send('Update the Book');
    });

app.listen(PORT);