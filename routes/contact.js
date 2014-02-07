var mongoose = require('mongoose');

db = mongoose.connect("mongodb://hsmanager:p@ssw0rd@ds061518.mongolab.com:61518/hsm_dev");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectID;

//var ContactObj = require('../lib/contact').Contact; 

exports.findAll = function(req, res) {
    res.send([{name:'class1'}, {name:'class2'}, {name:'class3'}]);
};
 
exports.findById = function(req, res) {
    res.send({id:req.params.id, name: "The Namein classes", description: "classy description"});
};

//post
exports.addContact = function(req, res, next) {
    var contact = req.body;
    console.log('Adding contact: ' + contact.firstName );
    
     res.send(201, contact)
    }