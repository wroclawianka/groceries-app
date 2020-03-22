const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema(
    {
        label: String,
        completed: Boolean,
        cost: Number,
        categoryId: String
    }
);

ItemSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

ItemSchema.set('toJSON', {
    virtuals: true
});


module.exports = mongoose.model("Item", ItemSchema, "items");
