var productcontroller = function(model){

var post = function(req,res) { 
         model.Save(req.body,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
   
    };  

var get = function(req,res) {
         model.FindOne(req.query,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
    };

var put =  function(req,res) {
             model.Update(req.body,function(err, model){
                if(err) res.status(500).send(err) ;
             res.json(model);
         });
    };

var skucodemiddleware = function(req, res, next){
         req.params.skucode = parseInt(req.params.skucode);
         model.Find( req.params ,function(err, model){
            if(err) 
            res.status(500).send(err);
            else if (model)
            {
                req.model =model;
                next();
            }
            else
             res.status(500).send("Requested entity not found.");
         });
};

var getbyskucode =function(req,res) {
        res.json(req.model);
    };

var patchbyskucode = function(req,res) {
        if(req.body._id)
        delete req.body._id;
        for(var key in req.body)
        {
            req.model[0]._doc[key]= req.body[key] ;
        }
        model.Update(req.model[0]._doc,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
        });
    };

var getbyviewtype = function(req,res) {
        
         model.Find(req.params,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
};

var getbypricerange = function(req,res) {
         var query =  { price: {$gt :parseInt( req.params.min) , $lt :parseInt( req.params.max)}};
         model.Find(query,function(err, model){
                if(err) res.status(500).send(err);
             res.json(model);
         });
         
};

return {
             post:post,
             get:get,
             put: put,
             skucodemiddleware : skucodemiddleware,
             getbyskucode : getbyskucode,
             patchbyskucode :patchbyskucode,
             getbypricerange :getbypricerange,
             getbyviewtype:getbyviewtype
         };
         
};

module.exports = productcontroller;