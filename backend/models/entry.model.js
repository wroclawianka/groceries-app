const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EntrySchema = new Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        phoneNumber: String
    }
);

module.exports = mongoose.model("Entry", EntrySchema, "entries");
