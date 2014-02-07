var mongoose = require("mongoose");
var administrator = require('Administrator');
var account = require('Account');

var SchoolSchema  = new mongoose.Schema({

	administrator: administrator.AdministratorSchema,
	account: account.AccountSchema,
	students: []
	
});

var School = mongoose.model('School', SchoolSchema);

module.exports = {
    School: School
}; 