const express=require('express')
const authMiddleware = require('../Config/Auth.Middleware')
const { suggestLocation, AuditReview, tripPlan } = require('../Controllers/Ai.Controllers')

const router=express.Router()

router.post("/generateTrip",authMiddleware, suggestLocation)
router.post("/generateAudit",authMiddleware, AuditReview)
router.post("/tripplan",authMiddleware, tripPlan)

module.exports=router