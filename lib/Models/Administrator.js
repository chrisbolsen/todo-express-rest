var mongoose = require("mongoose");

var AdministratorSchema = new mongoose.Schema({
		firstName: {
			type: String,
			required: false,
			trim: true
		},
		middleName: {
			type: String,
			required: false,
			trim: true
		},
		lastName:{
			type: String,
			required: false,
			trim: true
		},
		address: {
			type: String,
			required: false,
			trim: true
		},
		address2: {
			type: String,
			required: false,
			trim: true
		},
		city: {
			type: String,
			required: false,
			trim: true
		},
		state: {
			type: String,
			required: false,
			trim: true
		},
		zip: {
			type: String,
			required: false,
			trim: true
		},
		email:{
			type: String,
			required: false,
			trim: true
		},
		phone: {
			type: String,
			required: false,
			trim: true
		},
		password: {
			type: String,
			required: false,
			trim: true
		}
});

var Administrator = mongoose.model('Administrator', AdministratorSchema);

module.exports = {
    Administrator: Administrator,
    AdministratorSchema : AdministratorSchema
};