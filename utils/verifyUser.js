import errorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
   
    const authHeader = req.headers.authorization;
    // const token = req.cookies.access_token;

    if (!authHeader) return next(errorHandler(401, "Access denied. No token provided."));

    jwt.verify(authHeader, process.env.JWT_SECRET, (err, user) => {
        if (err) return next(errorHandler(403, "Invalid token."));
        req.user = user;
        next();
    });    
}