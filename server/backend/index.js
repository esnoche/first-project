const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const usrModel = require("./dataModel")

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/system");

app.post("/login", (req, res) => {
    const{email, password} = req.body;

    usrModel.findOne({email})
    .then(existingUser => {
        if(!existingUser) {
            return res.status(404).json({error: "User not found, please signup"});
        }
        if(existingUser.password !== password) {
            return res.status(401).json({error: "Incorrect password"});
        }
        res.json({message: "Login Successful"});
    })
    .catch(err => {
        res.status(500).json({error: err.message});
    })
});


app.post("/signup", async (req, res) => {
    // usrModel.create(req.body)
    // .then(usr => res.json(usr))
    // .catch(err => res.json(err))

    const { email, password } = req.body;
    try {
        const existingUser = await usrModel.findOne({email});

        if(existingUser) {
            return res.status(400).json({ error: "User already exists, please login instead." })
        }

        const newUser = new usrModel({email, password});
        await newUser.save();

        return res.status(201).json({message: "User created successfully."});
        // usrModel.findOne({ email })
        //     .then(existingUser => {
        //         if (existingUser) {
        //             return res.status(409).json({ error: "User already exists, please login instead." });
        //         }
        //         return usrModel.create({ email, password });
        //     })
        //     .then(newUser => {
        //         res.json(newUser);
        //     });
        // .catch(err => {
        //     res.status(500).json({ error: err.message });
        // });

    } catch(err) {
        console.error("error during signup", err);
        return res.status(500).json({error: "Internal server error"});
    }





    //     if(err) {
    //         res.status(500).json({error: err.message});
    //         return;
    //     }
    //     if(existingUser) {
    //         res.status(400).json({error: "User already exists, please login instead."});
    //         return;
    //     }
    //     usrModel.create({email, password})
    //     .then(newUser => {
    //         res.json(newUser);
    //     })
    //     .catch(err => {
    //         res.status(500).json({error: err.message});
    //     });
    // });



});

app.listen(3001, () => {
    console.log("server is running...");
})