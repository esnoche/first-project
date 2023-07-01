const mongoose = require("mongoose")

const usrSchema = new mongoose.Schema({
    name: String,
    password: String
})

const usrModel = mongoose.model("usr", usrSchema);
module.exports = usrModel