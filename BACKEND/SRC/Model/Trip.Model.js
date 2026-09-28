const mongoose = require("mongoose");

const tripSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        destination: {
            type: String,
            required: true,
        },

        duration: {
            type: Number,
            required: true,
        },

        unitCount: {
            type: Number,
            required: true,
        },

        operationalTier: {
            type: String,
            enum: ["Budget", "Standard", "Premium"],
            required: true,
        },

        audit: {
            type: mongoose.Schema.Types.Mixed,
        },

        itinerary: {
            type: mongoose.Schema.Types.Mixed,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Trip", tripSchema);
