const mongoose = require('mongoose');

const ClassSubjectModel = mongoose.model('classSubject', {
    className: {type: Number},
    subjectName: {type: String},
});

module.exports = ClassSubjectModel;
