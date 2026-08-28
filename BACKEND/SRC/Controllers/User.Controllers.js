const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../Model/User.Model");

const signup = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(404).json({ message: "User Already Exist" });
        }
        const user = new User({
            username,
            email,
            password,
        });

        await user.save();
        const token = jwt.sign(
            {
                id: user.id,
            },
            process.env.JWT_TOKEN,
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
        const existUser = await User.findOne({ email });
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
                id: existUser.id,
            },
            process.env.JWT_TOKEN,
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

const getMe = async (req, res) => {
    try {
        const existUser = await User.findById(req.user.id);

        if (!existUser) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.status(200).json({
            message: "Successfully fetch Get User Request",
            username: existUser.username,
            email: existUser.email,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong in Get User request",
        });
    }
};

module.exports = { login, signup, getMe };
