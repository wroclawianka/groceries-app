const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
    {
        label: String
    }
);

CategorySchema.virtual('id').get(function(){
    return this._id.toHexString();
});

CategorySchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model("Category", CategorySchema, "categories");
