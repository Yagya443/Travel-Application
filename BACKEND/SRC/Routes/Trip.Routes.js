const express=require("express")
const {createTrip, getTrip, getTripById, deleteTrip, editTrip}=require("../Controllers/Trip.Controllers")
const authMiddleware = require("../Config/Auth.Middleware")

const router=express.Router()

router.post("/createTrip",authMiddleware, createTrip)
router.get("/getTrip", authMiddleware, getTrip)
router.get("/getTripById/:id",authMiddleware, getTripById)
router.delete("/deleteTrip/:id",authMiddleware, deleteTrip)
router.put("/editTrip/:id",authMiddleware, editTrip)

module.exports = router;