var express = require('express');
var repository = require('./../repository')

var productrouter=express.Router();
var model = new repository.Repository('product');

productrouter.route('/Products')
    .get(function(req,res) {
         model.findAll(req.query,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
         
    })
    .post(function(req,res) {
         model.Save(req.body,function(err, model){
                if(err) console.log(err); //res.status(500).send(err);
             res.json(model);
         });
   
    })
     .put(function(req,res) {
             model.Update(req.body,function(err, model){
                if(err) res.status(500).send(err) ;
             res.json(model);
            });
        });   
    
    

productrouter.route('/Products/:skucode')
    .get(function(req,res) {
         model.findOne(req.query,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
     
    });
   
   
module.exports = productrouter;
    