var should = require ('should');
    request   =  require ('supertest');
    mongoose = require ('mongoose');
    app = require ('./../../server/dev/server.js');
    repository = require ('./../../app/js/api/repository');
    agent= request.agent(app)
    

describe ('ProductController Tests:', function(){
        describe  ('Post', function(){
            it('Should not allow empty name, price and image',function(){
                var product = {
                                    "name": "esse consequat culpa",
                                    "price": 9037.7553,
                                    "productviewtype": "upcoming",
                                    "image": "h.jpeg",
                                    "productdetails": {
                                    "brand": "ex aliqua commodo",
                                    "color": {
                                        "items": [
                                        "green",
                                        "green",
                                        "brown"
                                        ]
                                    },
                                    "description": "Est amet non tempor dolore reprehenderit. Sit deserunt ullamco consectetur pariatur commodo ea commodo quis commodo. Culpa incididunt eiusmod veniam ex occaecat nostrud in exercitation pariatur. Sunt irure ipsum incididunt id pariatur. Ut tempor amet amet ad dolor anim tempor deserunt elit commodo enim sunt ut.\r\nEiusmod elit magna aute labore pariatur dolore sit. Velit veniam laboris reprehenderit voluptate voluptate non id proident. Aliqua fugiat nulla anim ex veniam commodo ex. Laboris Lorem adipisicing fugiat nostrud do. Occaecat eu est Lorem est. Ullamco qui veniam consectetur exercitation reprehenderit anim elit excepteur nostrud anim. Ea proident ipsum pariatur veniam do duis.\r\nIrure quis excepteur voluptate reprehenderit dolor et laboris nulla velit exercitation. Incididunt duis consectetur dolor ad aliquip occaecat cupidatat consectetur cupidatat ipsum magna commodo proident. Tempor nisi aute aute do est ad ea. Fugiat voluptate quis occaecat nostrud excepteur aliquip veniam nostrud sunt commodo. Sint sint in laboris id culpa Lorem deserunt. Dolore fugiat minim reprehenderit occaecat eu in aliqua excepteur. Excepteur excepteur dolor fugiat ipsum nisi magna culpa amet.\r\n",
                                    "season": {
                                        "items": [
                                        "All Seasons",
                                        "Winter Collections",
                                        "Winter Collections"
                                        ]
                                    },
                                    "size": {
                                        "items": [
                                        "XXL",
                                        "M"
                                        ]
                                    }
                                    },
                                    "skucode": 886279,
                                    "teaser": "Cupidatat ut cillum id aute amet magna nulla aliquip et enim consequat elit. Qui non non anim proident dolore eiusmod ipsum et deserunt. Excepteur magna enim excepteur dolor dolor amet dolor culpa reprehenderit sunt sit sit exercitation elit. Aliquip in adipisicing do commodo. Non exercitation dolor dolore cupidatat nostrud velit sint amet adipisicing minim cupidatat fugiat dolore. Magna consectetur nostrud reprehenderit culpa amet duis cillum minim officia consequat nulla incididunt officia. Lorem nisi culpa sunt amet eu veniam sint.\r\n"
                                };
                agent
                    .post('/api/Products')
                    .send(product)
                    .expect(200)
                    .end(function(err,result){
                        result.body.name.should.equal('esse consequat culpa');
                        result.body.should.have.property('_id');
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