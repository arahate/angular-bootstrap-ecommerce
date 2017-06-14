var db = require('./../db');
var mongoose = require('mongoose');

var userschema = new mongoose.Schema( {
        "_id": {
            "type": "string"
        },
        "about": {
            "type": "string"
        },
        "address": {
            "type": "string"
        },
        "age": {
            "type": "number"
        },
        "balance": {
            "type": "string"
        },
        "company": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "eyeColor": {
            "type": "string"
        },
        "gender": {
            "type": "string"
        },
        "guid": {
            "type": "string"
        },
        "index": {
            "type": "number"
        },
        "isActive": {
            "type": "boolean"
        },
        "latitude": {
            "type": "number"
        },
        "longitude": {
            "type": "number"
        },
        "name": {
            "type": "string"
        },
        "phone": {
            "type": "string"
        },
        "picture": {
            "type": "string"
        },
        "registered": {
            "type": "string"
        },
        "tags": {
            "items": {
                "type": "string"
            },
            "type": "array"
        }
    })

var user = db.model('user', userschema);
module.exports = user;
