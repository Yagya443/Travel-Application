const express = require("express");

const User = require("../Model/User.Model");

const signUp = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const existUser = User.findOne({ email });
        if (existUser) {
            return res.status(404).json({ message: "User Already Exist" });
        }
        const user = new User({
            name,
            email,
            password,
        });

        await user.save();
        const token = jwt.sign(
            {
                _id: user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            },
        );
        res.status(201).json({
            message: "Account created successfully",
            token,
            user,
        });
    } catch (error) {
        console.log(error);
    }
};
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existUser = User.findOne({ email });
        if (!existUser) {
            return res.status(404).json({ message: "No User Exist" });
        }
        if (existUser.password != password) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }
        const token = jwt.sign(
            {
                _id: existUser._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d",
            },
        );
        res.status(200).json({
            message: "Login successful",
            token,
            user: existUser,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = { login };
