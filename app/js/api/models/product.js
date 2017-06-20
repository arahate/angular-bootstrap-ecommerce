var db = require('./../db');
var mongoose = require('mongoose');

var productschema = new mongoose.Schema( 
    {
        "id": { "type": "string"  },
        "name": { "type": "string" },
        "price": {"type": "number"  },
        "image": {"type": "string"  },
        "productviewtype": {"type": "string", "enum": ['upcoming', 'current', 'new'],  },
        "productdetails": {
                "brand": {"type": "string"  },
                "color": {
					"items": {
						"type": "string"
                    },
                    "type": "array"
                },
                "description": {
					"type": "string"
                },
                "season": {
					"items": {
						"type": "string"
                    },
                    "type": "array"
                },
                "size": {
					"items": {
						"type": "string"
                    },
                    "type": "array"
                }
            
        },
        "skucode": {
			"type": "number"
        },
        "teaser": {
			"type": "string"
        }
});

var product = db.model('product', productschema);
module.exports = product;

