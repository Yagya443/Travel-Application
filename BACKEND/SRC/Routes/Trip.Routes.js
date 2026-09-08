const express=require("express")
const {createTrip, getTrip, getTripById, deleteTrip, editTrip}=require("../Controllers/Trip.Controllers")

const router=express.Router()

router.post("/createTrip", createTrip)
router.get("/getTrip", getTrip)
router.get("/getTripById",getTripById)
router.delete("/deleteTrip", deleteTrip)
router.put("/editTrip", editTrip)

module.exports = router;