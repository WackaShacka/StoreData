var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
bar cookieParser = require('cookie-parser');

var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());

/* Post home page. */
router.post('/storeData', function(req, res, next) {
    var value_name = req.body.order;
    res.send("order successfully received: " + value_name);
});

module.exports = router;
