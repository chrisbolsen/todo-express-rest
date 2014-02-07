Manager.User = function(opts){
	"use strict";
	opts = _.extend({
		firstName: null,
		middleName: null,
		lastName: null,
		address: null,
		address2: null,
		city: null,
		state: null,
		zip: null,
		email: null,
		phone: null,
		password: null
	}, opts);
	_.extend(this, opts);
};