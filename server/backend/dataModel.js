const mongoose = require("mongoose")

const usrSchema = new mongoose.Schema({
    email: String,
    password: String
})

const usrModel = mongoose.model("usr", usrSchema);
module.exports = usrModel;