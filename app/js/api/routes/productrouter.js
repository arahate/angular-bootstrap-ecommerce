var express = require('express');
var repository = require('./../repository');

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
    
    

productrouter.route('/Products/skucode/:skucode')
   .get(function(req,res) {
        //  console.log(req.params.skucode);
         req.params.skucode = parseInt(req.params.skucode);
         product.find(req.params,function(err, product){
            res.json(product);
         });
        //  model.Find( { skucode: 278584 } ,function(err, model){
        //         if(err) res.status(500).send(err);
        //      res.json(model);
        //  });
         
    });

   productrouter.route('/Products/view/:productviewtype')
   .get(function(req,res) {
        
         model.Find(req.params,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
         
    });
   
   productrouter.route('/Products/price/min/:min/max/:max')
   .get(function(req,res) {
         var query =  { price: {$gt :parseInt( req.params.min) , $lt :parseInt( req.params.max)}};
         model.Find(query,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
         
    });

module.exports = productrouter;
    