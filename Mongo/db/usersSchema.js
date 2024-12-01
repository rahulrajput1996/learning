const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollno: { type: Number, required: true },
    fav_subject: { type: String, required: true },
});
const allusers = mongoose.model("users", userSchema);
module.exports = allusers