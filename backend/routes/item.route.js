const express = require('express');
const router = express.Router();
const Item = require('../models/item.model');

router.get('/item', (req, res) => {
    const category = req.query.value;
    Item.find({category: category}, (err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json(data);
    });
});

router.post('/item', (req, res) => {
    const item = new Item();
    item.label = req.body.label;
    item.save((err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json(data);
    });
});

// router.post('/patch/entry/:id', (req, res) => {
//     const id = req.params.id;
//     const update = req.body;
//     Entry.findByIdAndUpdate({_id: id}, update, {upsert: true}, (err) => {
//         if (err) return res.json({success: false, error: err});
//         return res.json({success: true});
//     });
// });

module.exports = router;
