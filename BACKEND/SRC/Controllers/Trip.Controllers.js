const Trip = require("../Model/Trip.Model");
const jwt = require("jsonwebtoken");

// createTrip
// getTrip
// deleteTrip
// editTrip

// getTripById
// getSavedTrips
// updateTrip

const createTrip = async (req, res) => {
    try {
        const {
            user,
            destination,
            startDate,
            endDate,
            adults,
            minBudget,
            maxBudget,
        } = req.body;

        const trip = new Trip({
            user: req.user._id,
            destination,
            startDate,
            endDate,
            adults,
            minBudget,
            maxBudget,
        });

        await trip.save();
        res.status(201).json({
            message: "Trip created successfully",
            trip,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong in controller",
        });
    }
};

const getTrip = async (req, res) => {
    try {
        const allTrip = await Trip.find({ user: req.user._id });

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

        const getTrip=await Trip.findById(id)

        return res.status(200).json(getTrip);

    } catch (error) {
        res.status(401).json({ message: "Something went wrong in deleting" });
    }
};

const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params;

        const deleteTrip = await Trip.findOneAndDelete({
            id,
            user: req.user._id,
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
                id,
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

module.exports = { createTrip, getTrip, deleteTrip, editTrip ,getTripById};
