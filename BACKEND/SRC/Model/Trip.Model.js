const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
    {
        destination: {
            type: String,
            required: true,
        },

        duration: {
            type: Number,
            required: true,
        },

        travelers: {
            type: Number,
            required: true,
        },

        travel_style: {
            type: String,
            required: true,
        },

        itinerary: {
            type: Array,
            required: true,
        },

        budget: {
            type: Number,
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false,
        },
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("Trip", tripSchema);