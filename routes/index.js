var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var path = require('path');
var upload = multer();
var cookieParser = require('cookie-parser');

var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(cookieParser());
router.use(upload.array());

/* Post home page. */
router.post('/storeData', function(req, res, next) {
    var value_name = req.body.order;
    res.send("order successfully received: " + value_name);
});

module.exports = router;
