const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {
        id: Number,
        label: String,
        completed: Boolean,
        cost: Number
    }
);

module.exports = mongoose.model("Item", ItemSchema, "items");
