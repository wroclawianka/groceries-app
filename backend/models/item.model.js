const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {
        id: Number,
        label: String,
        completed: Boolean,
    }
);

module.exports = mongoose.model("Item", ItemSchema, "items");
