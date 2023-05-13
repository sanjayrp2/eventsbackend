const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    email:String,
    phone_num: Number,
    password: String,
    role: String,
    department:String
})
module.exports. Admin = mongoose.model ("Admin", adminSchema);