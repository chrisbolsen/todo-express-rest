Manager.TimeSlot = function(opts){
	"use strict";
	opts = _.extend({
		dayOfWeek: null,
		timeOfDay: null,
		durationInHours: 0
	}, opts);
	_.extend(this, opts);
};