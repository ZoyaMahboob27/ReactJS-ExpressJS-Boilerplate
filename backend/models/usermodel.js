//const mongoose = require('mongoose')
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

const userModel = mongoose.model("users", UserSchema)
//module.exports = userModel;

export default userModel;
