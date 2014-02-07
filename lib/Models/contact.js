var mongoose = require("mongoose");

var ContactSchema = new mongoose.Schema({
    assignedDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    expectedDate: {
        type: Date,
        required: false
    },
    completedDate: {
        type: Date,
        required: false
    }
 
});

var Contact = mongoose.model('Contact', ContactSchema);

module.exports = {
    Contact: Contact
};