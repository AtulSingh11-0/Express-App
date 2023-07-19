const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log(
        'Time : '+ Date.now()
    );
    next();
});

router.get('/', (req, res) => {
    res.send('Birds Homepage');
});

router.get('/about', (req, res) => {
    res.send('Birds About-page');
});

module.exports = router;