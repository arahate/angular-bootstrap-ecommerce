var express = require('express');
var repository = require('./../repository')

var userrouter=express.Router();
var model = new repository.Repository('user');

userrouter.route('/Users')
    .get(function(req,res) {
        
         model.findAll(req.query,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
         
    })
    .post(function(req,res) {
        //console.log(req.body);
         model.Save(req.body,function(err, model){
                if(err)  //res.status(500).send(err);
             res.json(model);
         });
    });

    userrouter.route('/Users/:id')
    .get(function(req,res) {
        
         model.FindById(req.params.id,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
         
    });

    userrouter.route('/Users/gender/:gender')
    .get(function(req,res) {
        //res.send(req.params);
         model.Find(req.params,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
         
    });

module.exports = userrouter;
    