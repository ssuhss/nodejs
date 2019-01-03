var mongoClient = require('mongodb').MongoClient;

var url = 'mongodb://172.17.0.1/';

mongoClient.connect(url, function (err, database) {
    var db = database.db('checkoutdb');
    //var collections = db.collection('logs').find();

    collections.each(function (err, doc) {
        console.log(doc);
    });

});
