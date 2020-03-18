const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {
        label: String,
        completed: Boolean,
        cost: Number,
        categoryId: Number
    }
);

module.exports = mongoose.model("Item", ItemSchema, "items");
