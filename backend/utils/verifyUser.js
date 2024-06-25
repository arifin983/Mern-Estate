import { errorHandler } from "./error.js";
import jwt from "jsonwebtoken";
const jwtKey = "Estate";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorHandler(401, "Unauthorized"));
  jwt.verify(token, jwtKey, (err, validate) => {
    if (err)
      return next(
        errorHandler(405, "Invalid token!!Please provide a valid token")
      );
    req.user = validate;
    console.log(validate)
    next();
  });
};
