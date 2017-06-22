
var mongoose = require('mongoose');  
mongoose.connect(process.env.MONGO_CONNECTIONSTRING, function () {
  console.log( process.env.MONGO_DB + 'connected');
});     // connect to mongoDB database on modulus.io


module.exports = mongoose;