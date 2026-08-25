const express = require("express");
const authMiddleware = require("../Config/Auth.Middleware");
const { login, signup, getMe } = require("../Controllers/User.Controllers");

const router = express.Router();

router.post("/", login);
router.post("/signup", signup);
router.get("/me", authMiddleware, getMe);


module.exports = router;
