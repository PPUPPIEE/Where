const mongoose = require("mongoose");

const AddlocationSchema = new mongoose.Schema({
    name: { type: String },
    sector: { type: String },
    provinece: { type: String },
    district: { type: String },
    subdistrict: { type: String }
},{
    collation: "addlocation",
    timestamps:true
}
    );

    module.exports = mongoose.model('Addlocation',AddlocationSchema);