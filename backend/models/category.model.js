const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        label: String
    }
);

module.exports = mongoose.model("Category", CategorySchema, "categories");
