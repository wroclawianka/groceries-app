const express = require('express');
const router = express.Router();
const Item = require('../models/item.model');

router.get('/item', (req, res) => {
    const categoryId = req.query.categoryId;
    const params = (categoryId) ? {categoryId} : {};
    Item.find(params, (err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json(data);
    });
});

router.post('/item', (req, res) => {
    const item = new Item({
        label: req.body.label,
        categoryId: req.body.categoryId,
        completed: false
    });
    item.save((err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json(data);
    });
});

router.patch('/item/:id', (req, res) => {
    const id = req.params.id;
    const update = req.body;
    Item.findOneAndUpdate({_id: id}, update, {new: true}, (err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json(data);
    });
});

module.exports = router;
