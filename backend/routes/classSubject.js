const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const ClassSubjectModel = require('../models/classSubject');
const ResultModal = require('../models/result');

router.get('/:id', async (req, res) => {
    var classSubject = await ClassSubjectModel.find({ className: req.params.id });
    res.json(classSubject);
})

router.get('/', async (req, res) => {
    var classSubject = await ClassSubjectModel.find({});
    res.json(classSubject);
})

router.post('/', async (req, res) => {
    let classSubject = {
        className: req.body.className,
        subjectName: req.body.subjectName,
    }
    await ClassSubjectModel.create(classSubject);
})


router.put('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        let subject = {
            className: req.body.className,
            subjectName: req.body.subjectName,
        }

        ClassSubjectModel.findByIdAndUpdate(req.params.id, { $set: subject }, { new: true }, (err, doc) => {
            if (err) {
                console.log('Error in Update subjectloyee by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})


router.delete('/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        ClassSubjectModel.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                console.log('Error in DELETE subjectloyee by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

module.exports = router;