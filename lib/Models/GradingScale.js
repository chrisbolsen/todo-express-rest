Manager.GradingScale = function(opts){
	"use strict";
	opts = _.extend({
		title: null,
		scale: []
	}, opts);
	_.extend(this, opts);
};

Manager.GradingScale.prototype.getMark = function(score){
	var mark;
	_.each(this.scale, function(item, index, list){
		if(score >= item.lowVal && score < (item.highVal + 1)){
			mark = item.mark;
		}
	});
	return mark;
};

Manager.GradingScale.prototype.addGradeRange = function(mark, lowVal, highVal){
	this.scale.push({ 
		mark: mark, 
		lowVal: lowVal, 
		highVal: highVal 
	});
};

Manager.GradingScale.prototype.initializeScale = function(){
	this.addGradeRange("A+", 97, 100);
	this.addGradeRange("A", 93, 96);
	this.addGradeRange("A-", 90, 92);
	this.addGradeRange("B+", 87, 89);
	this.addGradeRange("B", 83, 86);
	this.addGradeRange("B-", 80, 82);
	this.addGradeRange("C+", 77, 79);
	this.addGradeRange("C", 73, 76);
	this.addGradeRange("C-", 70, 72);
	this.addGradeRange("D+", 67, 69);
	this.addGradeRange("D", 63, 66);
	this.addGradeRange("D-", 60, 62);
	this.addGradeRange("F", 0, 59);
};

// A+ 97-100 
// A 93-96 
// A- 90-92 
// B+ 87-89 
// B 83-86 
// B- 80-82 
// C+ 77-79 
// C 73-76 
// C- 70-72 
// D+ 67-69 
// D 63-66 
// D- 60-62 
// F Below 60