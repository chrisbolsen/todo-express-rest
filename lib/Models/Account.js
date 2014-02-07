var mongoose = require("mongoose");

var AccountSchema = new mongoose.Schema({
		timeZone:  {
			type: String,
			required: false,
			trim: true
		},
		familyPassword:  {
			type: String,
			required: false,
			trim: true
		},
		expireDate:  {
			type: Date,
			required: false,
			trim: true
		},
		signUpDate:  {
			type: Date,
			required: false,
			trim: true
		},
		schoolName:  {
			type: String,
			required: false,
			trim: true
		},
		gradingScales: []
});