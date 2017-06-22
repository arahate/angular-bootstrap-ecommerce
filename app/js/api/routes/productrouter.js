var express = require('express');
var repository = require('./../repository');


var productrouter=express.Router();
var model = new repository.Repository('product');
var productcontroller = require('./../controllers/productcontroller')(model);

productrouter.route('/Products')
    .get(productcontroller.get)
    .post(productcontroller.post)
    .put(productcontroller.put);
    
productrouter.use('/Products/skucode/:skucode', productcontroller.skucodemiddleware);

productrouter.route('/Products/skucode/:skucode')
   .get(productcontroller.getbyskucode)
   .patch(productcontroller.patchbyskucode);

productrouter.route('/Products/view/:productviewtype')
   .get(productcontroller.getbyviewtype);

   productrouter.route('/Products/price/min/:min/max/:max')
   .get(productcontroller.getbypricerange);

module.exports = productrouter;
    