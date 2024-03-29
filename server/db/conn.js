/* Sets the connection with DATABASE using mongo Client, using Singleton pattern */
const { MongoClient } = require('mongodb');
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports ={
    connectToServer: function (callback) {
        client.connect( function (err, db){
            console.log(process.env.ATLAS_URI);
            //verify we got a good 'db' object
            if(db){
                //_db = db.db('employees');
                _db = db.db(process.env.DATABASE);
                console.log('Successfully connected to MongoDB.');
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    }
};