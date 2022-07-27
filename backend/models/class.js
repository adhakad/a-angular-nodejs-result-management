const mongoose = require('mongoose');

const ClassModel = mongoose.model('class', {
    className: {type: Number},
});

module.exports = ClassModel;
