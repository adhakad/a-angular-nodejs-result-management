const mongoose = require('mongoose');

const SubjectModel = mongoose.model('subject', {
    subjectName: {type: String},
});

module.exports = SubjectModel;
