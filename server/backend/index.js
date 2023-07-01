const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const usrModel = require("./dataModel")

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/system");

app.post("/signup", (req, res) => {
    usrModel.create(req.body)
    .then(usr => res.json(usr))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("<<<<<<///\\\>>>>>>>");
})