const express = require('express');
const router = express.Router();
const Item = require('../models/item.model');

router.get('/get/item', (req, res) => {
    const category = req.query.value;
    Item.find({category: category}, (err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json({success: true, items: data});
    });
});

module.exports = router;
