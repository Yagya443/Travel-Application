const express=require('express')
const authMiddleware = require('../Config/Auth.Middleware')
const { suggestLocation } = require('../Controllers/Ai.Controllers')

const router=express.Router()

router.post("/generateTrip",authMiddleware, suggestLocation)

module.exports=router