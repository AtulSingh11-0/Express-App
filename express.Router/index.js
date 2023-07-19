const express = require('express');
const app = express();
const birds = require('./birds');

app.use(birds);

app.listen(5000);

