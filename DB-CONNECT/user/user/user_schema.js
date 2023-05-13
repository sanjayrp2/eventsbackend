        const mongoose = require('mongoose');

        const userSchema = new mongoose.Schema({
        name: String,
        email:String,
        phone_num: Number,
        password: String,
        department:String
        })
        module.exports.Details = mongoose.model("Details",userSchema); 