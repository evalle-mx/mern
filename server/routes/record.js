const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require('mongodb').ObjectId;


// This section will help you get a list of all the records.
recordRoutes.route('/record')
    .get( function (req, res) {
        let db_connect = dbo.getDb('employees');
        db_connect
            .collection('records')
            .find( {} )
            .toArray( function (err, result) {
                if(err) throw err;
                res.json(result);
            });
    });

// This section will help you GET a single record by id
recordRoutes.route('/record/:id')
    .get( function(req, res) {
        let db_connect = dbo.getDb();
        let myquery = { _id: ObjectId( req.params.id )};
        db_connect
            .collection('records')
            .findOne( myquery, function(err, result){
                if(err) throw err;
                res.json(result );
            });
    });

// This section will help you CREATE a new record.
recordRoutes.route('/record/add')
    .post( function (req, res) {
        let db_connect = dbo.getDb();
        let myObj = {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        };
        db_connect
            .collection('records')
            .insertOne(myObj, function(err, result){
                if(err) throw err;
                res.json(result);
            });
    });

// This section will help you UPDATE a record by id.
recordRoutes.route('/update/:id')
    .post( function (req, res) {
        let db_connect = dbo.getDb();
        let myquery = { _id: ObjectId( req.params.id )}; 

        let newvalues = {   
            $set: {     
              name: req.body.name,    
              position: req.body.position,     
              level: req.body.level,   
            }, 
           };
        db_connect
           .collection("records")
           .updateOne(myquery, newvalues, function (err, result) {
             if (err) throw err;
             console.log("1 document updated");
             res.json(result);
           });
    });

// This section will help you DELETE a record
recordRoutes.route('/:id')
    .delete( function(req, res){
        let db_connect = dbo.getDb();
        let myquery = { _id: ObjectId( req.params.id )}; 
        db_connect
            .collection('records')
            .deleteOne(myquery, function(err, obj){
                if(err) throw err;
                console.log('1 document deleted');
                res.json(obj);
            });
    });

//expose the services as RecordRoute
module.exports = recordRoutes;