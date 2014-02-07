Manager.AcademicYear = function(opts){
	"use strict";
	opts = _.extend({
		title: null,
		dateEnrolled: null,
		dateWithdrawn: null,
		schoolName: null,
		courses: []
	}, opts);
	_.extend(this, opts);
};