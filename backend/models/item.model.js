const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {
        id: Number,
        label: String
    }
);

module.exports = mongoose.model("Item", ItemSchema, "items");
