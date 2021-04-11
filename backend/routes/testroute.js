var express = require('express');
var router = express.Router();

router.get('/testRoute', (req,res) => {
    res.send('testinsdg');
})

module.exports = router;