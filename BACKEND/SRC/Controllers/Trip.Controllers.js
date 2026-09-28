const Trip = require("../Model/Trip.Model");
const jwt = require("jsonwebtoken");
const { tripPlan } = require("./Ai.Controllers");

// createTrip
// getTrip
// deleteTrip
// editTrip

// getTripById
// getSavedTrips
// updateTrip

const createTrip = async (req, res) => {
    try {
        const { destination, duration, unitCount, operationalTier, audit } =
            req.body;

        const data = await tripPlan({
            destination,
            duration,
            unitCount,
            operationalTier,
            audit,
        });

        const trip = new Trip({
            user: req.user.id,
            destination,
            duration,
            unitCount,
            operationalTier,
            audit,
            itinerary: data,
        });

        await trip.save();

        res.status(201).json({
            message: "Trip created successfully",
            trip,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong in controller",
            error: error.message,
        });
    }
};

const getTrip = async (req, res) => {
    try {
        const allTrip = await Trip.find({ user: req.user.id }).sort({
            createdAt: -1,
        });

        res.status(201).json({ allTrip });
    } catch (error) {
        res.status(401).json({
            message: "Failed getting trips in controller",
        });
    }
};

const getTripById = async (req, res) => {
    try {
        const { id } = req.params;

        const getTrip = await Trip.findById(_id);

        return res.status(200).json(getTrip);
    } catch (error) {
        res.status(401).json({ message: "Something went wrong in deleting" });
    }
};

const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteTrip = await Trip.findOneAndDelete({
            _id:id,
            user: req.user.id,
        });

        if (!deleteTrip) {
            return res.status(404).json({
                message: "Habit not found",
            });
        }

        res.status(200).json({
            message: "Habit deleted successfully",
        });
    } catch (error) {
        res.status(401).json({ message: "Something went wrong in deleting" });
    }
};

const editTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const editTrip = await Trip.findOneAndUpdate(
            {
                _id: id,
                user: req.user.id,
            },
            req.body,
            {
                new: true,
            },
        );
        if (!editTrip) {
            return res.status(404).json({
                message: "Habit not found",
            });
        }
        res.status(201).json({
            message: "Habit updated successfully",
            editTrip,
        });
    } catch (error) {
        res.status(400).json({
            message: "Editing Habit went wrong in controllers",
        });
    }
};

module.exports = { createTrip, getTrip, deleteTrip, editTrip, getTripById };
