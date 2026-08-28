const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const authToken = req.headers.authorization;

        if (!authToken) {
            return res.status(401).json({ message: "No Token Provided" });
        }

        const token = authToken.split(" ")[1];

        const decode = jwt.verify(token, process.env.JWT_TOKEN);

        console.log(decode);

        req.user = decode;
        next();
    } catch (error) {
        return res.status(401).json({ message: error.message });
    }
};

module.exports = authMiddleware;