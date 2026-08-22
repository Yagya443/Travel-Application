const express = require("express");
const authMiddleware = require("../Config/Auth.Middleware");
const { login, signup } = require("../Controllers/User.Controllers");

const router = express.Router();

router.post("/", login);
router.post("/signup", signup);

module.exports = router;
