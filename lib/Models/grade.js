var mongoose = require("mongoose");

var GradeSchema = new mongoose.Schema({
    
    Grade: {
        type: Date,
        required: false
    }
 
});

var Grade = mongoose.model('Grade', GradeSchema);

var calculate = function (multiplier1, multiplier2) {
    return 6;
};

module.exports = {
    Grade: Grade,
    calculate : calculate
};