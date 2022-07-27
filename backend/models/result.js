const mongoose = require('mongoose');

const ResultModel = mongoose.model('result', {
    studentName: {type: String},
    rollNumber: {type: Number},
    className: {type: Number},
    subjectName: {type: String},
    marks: {type: Number},
});

module.exports = ResultModel;
