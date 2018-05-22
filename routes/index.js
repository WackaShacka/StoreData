var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoURI = process.env.MONGODB_URI || 'mongodb://heroku_p9s548dk:WaDDaW1nGW1nG@ds231360.mlab.com:31360/heroku_p9s548dk';

var controllerMain = require('../controllers/main');
var controllerMongoCollection = require('../controllers/database');

var bodyParser = require('body-parser');
var path = require('path');
var querystring = require('querystring');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/* Post home page. */
router.post('/storeData', controllerMongoCollection.storeData);

/*
router.get('/getAllOrders', controllerMongoCollection.getAllOrders);
router.get('/mongodb', function(request, response) {
    mongodb.MongoClient.connect(mongoDBURI, function(err, client)
    {
        if(err)
            throw err;

        var theDatabase = client.db('Your_DB_Name');

        var Routes = db.collection('Routes');

        Routes.find({ }).sort({ name: 1 }).toArray(function (err, docs)
        {
            if(err)
                throw err;

            response.render('pages/mongodb', {results: docs});
        });

        db.close(function (err)
        {
            if(err)
                throw err;
        });

    });
});
*/

module.exports = router;