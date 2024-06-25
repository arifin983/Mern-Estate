import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
mongoose.connect("mongodb://localhost:27017/mern-Estate");
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use((err, req, resp, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return resp.status(statusCode).send({
    success: false,
    statusCode,
    message,
  });
});
app.listen(3000, () => {
  console.log("port 300 was running");
});
