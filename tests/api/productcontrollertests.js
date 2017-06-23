var should = require ('should');
    request   =  require ('supertest');
    mongoose = require ('mongoose');
    app = require ('./../../server/dev/server.js');
    repository = require ('./../../app/js/api/repository');
    product = require ('./testdata/product.js');
   
    

describe ('ProductController Tests:', function(){
        describe  ('Post', function(){
             it('Should not allow empty name, price and image',function(done){
                var productpost = product[0];
                request(app)
                    .post('/api/Products')
                    .send(productpost)
                    .expect(500)
                    .end(function(err,result){
                        result.body.validationerror.should.equal('Name, Price and Image should be mandatory');
                        done();
                   });


            });

            it('Should post with all data',function(done){
                var productpost = product[1];
                request(app)
                    .post('/api/Products')
                    .send(productpost)
                    .expect(200)
                    .end(function(err,result){
                        result.body.name.should.equal('test');
                        result.body.price.should.equal(20.00);
                        result.body.image.should.equal('a.jpg');
                        done();
                   });


            });
        });

        describe  ('Get', function(){
            
        });

        describe  ('Put', function(){
            
        });

        describe  ('GetBySkuCode', function(){
            
        });

        describe  ('PatchBySkuCode', function(){
            
        });

        describe  ('GetByViewType', function(){
            
        });

        describe  ('GetByPriceRange', function(){
            
        });
});