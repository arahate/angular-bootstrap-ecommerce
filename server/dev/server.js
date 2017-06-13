var express =require ('express');
var path = require ('path');
var app =express();

var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

mongoose.connect('mongodb://localhost:27017/e-commerce');     // connect to mongoDB database on modulus.io

var rootpath= path.normalize( __dirname + '/../../../');

app.use(express.static('app'));
app.use(express.static('node_modules'));
app.use(express.static('theme'));
 // set the static files location /public/img will be /img for users

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());  


app.listen(3000);
console.log('Started listening at port 3000...');






    