
var mongoose = require('mongoose');  
mongoose.connect('mongodb://localhost:27017/e-commerce', function () {
  console.log('mongodb connected');
});     // connect to mongoDB database on modulus.io


module.exports = mongoose;