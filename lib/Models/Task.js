Manager.Task = function(opts){
	"use strict";
	opts = _.extend({
		title: null,
		timeSlot: new Manager.TimeSlot(),
		grade: null
	}, opts);
	_.extend(this, opts);
};