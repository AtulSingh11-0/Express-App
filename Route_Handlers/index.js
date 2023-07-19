const express = require('express');
const app = express();
const PORT = 5000;

const a = function (req, res, next) {
    console.log('Hello from A!');
    next();
};

const b = function (req, res, next) {
    console.log('Hello from B!');
    next();
};

const c = function (req, res) {
    res.send('Hello from C!');
};

app.get('/c', [a, b, c]);

app.listen(PORT);