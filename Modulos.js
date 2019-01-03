var Addition = require('./node_modules/michel/Addition.js');
var express = require('express');
var app = express();

var valueAddition = Addition.AddNumber(8,2);

app.set('view engine', 'jade');
app.get('/', function(req,res){
    res.render('index',
        {title: 'Michel', message:valueAddition})
});


var server = app.listen(3000, function () {

});



// var request = require("request");
// request("http://www.google.com",function(error,response,body)
// {
//     console.log(body);
// });