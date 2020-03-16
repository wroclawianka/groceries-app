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

router.patch('/item/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;
    Item.findByIdAndUpdate({_id: id}, update, {upsert: true}, (err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json(data);
    });
});

module.exports = router;
