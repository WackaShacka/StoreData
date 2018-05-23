var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoURI = process.env.MONGODB_URI || 'mongodb://WilliamA:WaDDaW1nGW1nG@ds231360.mlab.com:31360/heroku_p9s548dk';

// var mongoURI = process.env.MONGODB_URI || 'mongodb://Your_user_id:Your_password@YourHost.mlab.com:YourPort/Your_DB_Name';
// mongodb://<dbuser>:<dbpassword>@ds231360.mlab.com:31360/heroku_p9s548dk

var bodyParser = require('body-parser');
var path = require('path');
var querystring = require('querystring');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

module.exports.storeData = function (req, res, next)
{
    mongodb.MongoClient.connect(mongoURI, function(err, db)
    {
        if(err)
            throw err;

/*      var customerID = Math.floor((Math.random() * 1000000000000) + 1);
        var billingID = Math.floor((Math.random() * 1000000000000) + 1);
        var shippingID = Math.floor((Math.random() * 1000000000000) + 1);
        var orderID = Math.floor((Math.random() * 1000000000000) + 1);

        var CUSTOMERS = db.collection('CUSTOMERS');
        var customerdata = {
            _id: customerID,
            FIRSTNAME: shipment_info['fname'],
            LASTNAME: shipment_info['lname'],
            STREET: shipment_info['add1'] + ' ' + shipment_info['add2'],
            CITY: shipment_info['city'],
            STATE: shipment_info['state'],
            ZIP: shipment_info['zipcode'],
            PHONE: shipment_info['phone'],
            EMAIL: shipment_info['email']
        };

        CUSTOMERS.insertOne(customerdata, function (err, result) {
           if(err)
               throw err;
        });


        var BILLING = db.collection('BILLING');
        var billing = {
            _id: billingID,
            CUSTOMER_ID: customerID,
            CREDITCARDTYPE: shipment_info['cardtype'],
            CREDITCARDNUM: shipment_info['cardnumber'],
            CREDITCARDEXP: shipment_info['expiration'],
            CREDITCARDSECURITYNUM: shipment_info['securitynumber']
        };

        BILLING.insertOne(billing, function (err, result) {
            if(err)
                throw err;
        });


        var SHIPPING = db.collection('SHIPPING');
        var shipping = {
            _id: shippingID,
            CUSTOMER_ID: customerID,
            SHIPPING_STREET: shipping_info['Shipstreet'],
            SHIPPING_CITY: shipment_info['shipcity'],
            SHIPPING_STATE: shipment_info['shipstate'],
            SHIPPING_ZIP: shipment_info['shipzip']
        };

        SHIPPING.insertOne(shipping, function (err, result) {
            if(err)
                throw err;
        });


        var ORDERS = db.collection('ORDERS');
        var orderdata = {
            _id: orderID,
            CUSTOMER_ID: customerID,
            BILLING_ID: billingID,
            SHIPPING_ID: shippingID,
            DATE: shipment_info['date'],
            PRODUCT_VECTOR: shipment_info['productvector'],
            ORDER_TOTAL: shipment_info['ordertotal']
        };

        ORDERS.insertOne(orderdata, function (err, result) {
            if(err)
                throw err;
        });
*/

        db.collection("CUSTOMERS","BILLING","SHIPPING","ORDERS").find({}).toArray(function(err, result) {
            if(err)
                throw err;

            res.render('storeData', {results: result});
        });

        /*
            var theDatabase = client.db('dbName');
            var Orders = theDatabase.collection('Orders');
            var c = Orders.find({});

            c.forEach(function(myDoc)
            {
                console.log( "name: " + myDoc.name );
            });

            Orders.find().toArray(function(err, docs)
            {
                if(err)
                    throw err;

                response.render('storeData', {results: docs});
            });
         */

        db.close(function (err)
        {
            if(err)
                throw err;
        });

    });
};