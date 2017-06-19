var mongoose = require('mongoose');


var repository = function (modelName) {

  var self = this;

  self.Model = require('./models/' + modelName );

  self.findById = function (id, cb) {
    self.Model.findById({
      _id : id
    }, function(err, entity) {
      cb(err, entity);
    });
  };

  self.findOne = function (params, cb) {
    self.Model.findOne(params, function (err, entity) {
      if (!err && !entity) {
        err = true;
      }

      cb(err, entity);
    });
  };

  self.findAll = function (params, cb, lean) {
    if (!lean) {
        self.Model.find(params).exec(cb);
    } else {
        self.Model.find(params).lean().exec(cb);
    }
  };

  self.Save = function (obj, cb) {
    var entity = new self.Model(obj);
    entity.save(function (err) {
      cb(err,entity);
    });
  };

  self.Update = function (obj, cb) {
    var entity = new self.Model(obj);
    var entitytoupdate = JSON.parse(JSON.stringify(entity)); //create depp copy of object.
   
    delete entitytoupdate._id;

    self.Model.findOneAndUpdate(entity.id, entitytoupdate , {upsert: true, new: true, runValidators: true}, function (err, entitytoupdate) {
      if (err) {
        cb(err); 
      } 
       cb(err,entitytoupdate);
    });
  };

  self.Delete = function (entity, cb) {
    entity.remove(function (err) {
      cb(err);
    });
  };

};

repository.GetModel = function (modelName) {
  return mongoose.model(modelName);
};

module.exports.Repository = repository;