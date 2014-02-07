Manager.Student = function(opts){
	"use strict";
	Manager.User.call(this, opts);
	opts = _.extend({
		dateOfBirth: null,
		ssn: null,
		sex: null,
		gradeLevel: null,
		anticipatedGraduation: null,
		academicYears: []
	}, opts);
	_.extend(this, opts);
};

Manager.Student.prototype = Object.create(Manager.User.prototype);
