const mongoose = require("mongoose")

const usrSchema = new mongoose.Schema({
    email: String,
    password: String
})

/*
In Mongoose, when you define a model using mongoose.model(),
it automatically creates a collection in the MongoDB database based on the provided model name.
By default, Mongoose pluralizes the model name and converts it to lowercase to determine the collection name.
If you want to specify a custom collection name instead of relying on the default behavior,
you can pass a third argument to mongoose.model() with the desired collection name.
*/
const usrModel = mongoose.model("usr", usrSchema);
module.exports = usrModel;