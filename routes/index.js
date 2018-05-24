var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoURI = process.env.MONGODB_URI || 'mongodb://WilliamA:WaDDaW1nGW1nG@ds231360.mlab.com:31360/heroku_p9s548dk';

var controllerMain = require('../controllers/main');
var controllerMongoCollection = require('../controllers/database');

var bodyParser = require('body-parser');
var path = require('path');
var querystring = require('querystring');
var multer = require('multer');
var upload = multer();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(upload.array());

/* Post home page. */
router.get('/storeData', controllerMongoCollection.storeData);

module.exports = router;