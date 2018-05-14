var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var path = require('path');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* Post home page. */
router.post('/storeData', function(req, res, next) {
    var value_name = req.body.order;
    res.send("order successfully received: " + value_name);
});

module.exports = router;
