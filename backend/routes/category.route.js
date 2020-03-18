const express = require('express');
const router = express.Router();
const Category = require('../models/category.model');

router.get('/category', (req, res) => {
    Category.find({}, (err, data) => {
        if (err) return res.json({success: false, error: err});
        return res.json(data);
    });
});

module.exports = router;