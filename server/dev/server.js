var express =require ('express');
var path = require ('path');
var app =express();

var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());  
app.use(express.static('app'));
app.use(express.static('node_modules')); //To be removed
app.use(express.static('theme')); //To be removed
app.use(express.static('api'));

var rootpath= path.normalize( __dirname + '/../../../');



var userrouter = require ('./../../app/js/api/routes/userrouter');
var productrouter = require ('./../../app/js/api/routes/productrouter');

console.log(process.env.NODE_ENV);
console.log(process.env.PORT);

app.use('/api',userrouter);
app.use('/api',productrouter);
 
app.listen(process.env.PORT);
console.log('Started listening at port 3000...');
 

module.exports= app;





    