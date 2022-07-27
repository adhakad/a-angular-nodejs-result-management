const mongoose = require('mongoose');

const StudentModel = mongoose.model('student', {
    studentId: {type: Number},
    studentName: {type: String},
    rollNumber: {type: Number},
    className:{type:Number},
});

module.exports = StudentModel;
