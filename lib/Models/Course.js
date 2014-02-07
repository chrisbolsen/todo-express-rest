Manager.Course = function(opts){
	"use strict";
	opts = _.extend({
		title: null,
		courseCode: null,
		curriculum: new Manager.Curriculum(),
		courseType: null,
		creditHours: 0,
		mark: null,
		grade: null,
		gradeScale: new Manager.GradingScale(),
		timeSlots: [],
		tasks: []
	}, opts);
	_.extend(this, opts);
};