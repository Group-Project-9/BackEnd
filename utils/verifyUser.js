import errorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);

    if (!token) return next(errorHandler(401, "Access denied. No token provided."));

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, "Invalid token."));
        req.user = user;
        next();
    });    
}