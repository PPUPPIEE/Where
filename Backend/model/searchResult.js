const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
    name: { type: String },
    sector: { type: String },
    provinece: { type: String },
    district: { type: String },
    subdistrict: { type: String },
    createdAt : {type : Date},
    updatedAt : {type : Date}
},{
    collection: "addlocations",
}
    );

    module.exports = mongoose.model('location',locationSchema);