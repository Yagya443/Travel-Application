const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Type.Objectd,
            ref: "User",
            required: true,
        },
        destination: {
            type: String,
            required: true,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        adults: {
            type: Number,
            default: 1,
        },
        children: {
            type: Number,
            default: 0,
        },
        minBudget: {
            type: Number,
        },
        maxBudget: {
            type: Number,
        },
    },
    { timestamps: true },
);

module.exports=mongoose.model("Trip", tripSchema);