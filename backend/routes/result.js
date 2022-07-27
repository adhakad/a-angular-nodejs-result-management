const express = require('express');
const router = express.Router();
const ClassSubjectModel = require('../models/classSubject');
const ResultModal = require('../models/result');
const StudentModal = require('../models/student');

router.post('/', async (req, res) => {
    var className = req.body.className;
    var rollNumber = req.body.rollNumber;
    var result = await ResultModal.find({ className: className,rollNumber:rollNumber });
    res.json(result);
})

router.post('/:id', async (req, res) => {
    var className = req.params.id;
    var rollNumber = req.body.rollNumber;
    var classSubject = await ClassSubjectModel.find({ className: className });
    var student = await StudentModal.findOne({className:className,rollNumber:rollNumber});
    var studentName = student.studentName;

    for (var i = 0; i < classSubject.length; i++) {
        let result = {
            studentName: studentName,
            rollNumber: rollNumber,
            className: classSubject[i].className,
            subjectName: classSubject[i].subjectName,
            marks: req.body.type.options[i].subjectName,
        }
        await ResultModal.create(result);
    }
})

module.exports = router;