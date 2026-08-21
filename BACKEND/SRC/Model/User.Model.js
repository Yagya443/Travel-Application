const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Name is Required"],
        },
        password: {
            type: String,
            required: [true, "Password is Required"],
            minlength: 6,
        },
        email: {
            type: String,
            required: [true, "Email is Required"],
            lowercase: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("User", userSchema);
