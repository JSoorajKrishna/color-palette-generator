const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const color = new Schema({
    rgb: String
});

const credentialsSchema = new Schema({
    name: String,
    email: String,
    password: String
});

const Rgb = mongoose.model("rgb",color);
const credential = mongoose.model("authentication", credentialsSchema);

module.exports = {Rgb,credential};