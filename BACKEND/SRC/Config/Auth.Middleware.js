const jwt = require("jsonwebtoken");

const authMiddleware = (reqq, res, next) => {
    try {
        const authToken = reqq.headers.authorization;

        if (!authToken) {
            return res.status(401).jso({ message: "No Token Provided" });
        }

        const token = authToken.split(" ")[1];

        const decode = jwt.verify(token, process.env.JWT_SCRETE);

        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Wrong in Auth Middleware" });
    }
};

module.exports = authMiddleware;