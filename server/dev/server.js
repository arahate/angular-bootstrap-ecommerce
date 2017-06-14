var express =require ('express');
var path = require ('path');
var app =express();



var repository = require('./../../app/js/api/repository');
var user =require('./../../app/js/api/models/user');
var repository = require('./../../app/js/helpers/stringutil');

                   // mongoose for mongodb
//var repository = require('../../js/api/repository.js'); 
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());  


var rootpath= path.normalize( __dirname + '/../../../');

app.use(express.static('app'));
app.use(express.static('node_modules'));
app.use(express.static('theme'));
app.use(express.static('api'));

var userrouter = require('./../../app/js/api/routes/userrouter');
app.use('/api',userrouter);
 // set the static files location /public/img will be /img for users

// app.get('/user/:id', function (req, res, next) {
//     var model = new repository.Repository('user');
//     model.findById(req.params.id,function(err, model){
//     if(err) res.send(err);
//     res.json(model);
//     });
//   });

// app.get('/user', function (req, res, next) {
  
//     var model = new repository.Repository('user');
//     model.findById(req.params.id,function(err, model){
//     if(err) res.send(err);
//     res.json(model);
//     });
//   });

app.listen(3000);
console.log('Started listening at port 3000...');






    