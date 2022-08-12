import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        lowercase: true,
    },
    createdAt: Date,
    updatedAt: Date,
    password: String,
})

module.exports = mongoose.model("User", userSchema)  