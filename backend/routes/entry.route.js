const express = require('express');
const router = express.Router();
const Entry = require('../models/entry.model');

// get entries
router.get('/get/entry', (req, res) => {
    const value = req.query.value;
    Entry.find(
        {
            "$or": [
                {"firstName": {$regex: `${value}`, '$options' : 'i'}},
                {"lastName": {$regex: `${value}`, '$options' : 'i'}},
                {"phoneNumber": {$regex: `${value}`, '$options' : 'i'}}
            ]
        }, (err, data) => {
            if (err) return res.json({success: false, error: err});
            return res.json({success: true, entries: data});
        });
});

router.get('/get/entry/:id', (req, res) => {
    Entry.findOne({_id: req.params.id}, (err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, data: data});
    });
});

router.post('/post/entry', (req, res) => {
    const entry = new Entry();
    entry.firstName = req.body.firstName;
    entry.lastName = req.body.lastName;
    entry.phoneNumber = req.body.phoneNumber;
    entry.save((err) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

router.post('/patch/entry/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;
    Entry.findByIdAndUpdate({_id: id}, update, {upsert: true}, (err) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true});
    });
});

module.exports = router;
