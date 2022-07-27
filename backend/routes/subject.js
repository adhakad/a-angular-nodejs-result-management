const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const SubjectModel = require('../models/subject');

//GET Single subjectloyee
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        SubjectModel.findById(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in GET subjectloyee by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

//GET API
router.get('/', (req, res) => {
    SubjectModel.find((err, doc) => {
        if(err){
            console.log('Error in GET Data ' + err);
        } else {
            res.send(doc);
        }
    })
})

//POST API
router.post('/', (req, res) => {
    let subject = new SubjectModel({
        subjectName: req.body.subjectName,
    })

    subject.save((err, doc) => {
        if(err){
            console.log('Error in Post Data ' + err);
        } else {
            res.send(doc);
        }
    })
})

//PUT API
router.put('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        let subject = {
            subjectName: req.body.subjectName,
        }

        SubjectModel.findByIdAndUpdate(req.params.id, {$set :subject}, {new: true}, (err, doc) => {
            if(err){
                console.log('Error in Update subjectloyee by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

//DELETE Single subjectloyee
router.delete('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        SubjectModel.findByIdAndRemove(req.params.id, (err, doc) => {
            if(err){
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