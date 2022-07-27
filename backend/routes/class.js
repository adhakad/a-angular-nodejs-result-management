const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const ClassModel = require('../models/class');

//GET Single classloyee
router.get('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        ClassModel.findById(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in GET classloyee by ID ' + err);
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
    ClassModel.find((err, doc) => {
        if(err){
            console.log('Error in GET Data ' + err);
        } else {
            res.send(doc);
        }
    })
})

//POST API
router.post('/', (req, res) => {
    let classData = new ClassModel({
        className: req.body.className,
    })

    classData.save((err, doc) => {
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
        let classData = {
            className: req.body.className,
        }

        ClassModel.findByIdAndUpdate(req.params.id, {$set :classData}, {new: true}, (err, doc) => {
            if(err){
                console.log('Error in Update classloyee by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

//DELETE Single classloyee
router.delete('/:id', (req, res) => {
    if(ObjectId.isValid(req.params.id)){
        ClassModel.findByIdAndRemove(req.params.id, (err, doc) => {
            if(err){
                console.log('Error in DELETE classloyee by ID ' + err);
            } else {
                res.send(doc);
            }
        })
    } else {
        return res.status(400).send(` No record found with ${req.params.id}`);
    }
})

module.exports = router;