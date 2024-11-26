import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import videoRoutes from "./routes/video.js";
import signUploadRoutes from "./routes/sign-upload.js"; //signature upload route
import { errorHandler } from "./middlewares/error.js";

dotenv.config();

// Express App
const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/", videoRoutes);
app.use("/", signUploadRoutes);
app.use(errorHandler); //This middleware is executed only when an error is passed to the next(err) function in a previous middleware or route.

// Listen to the requests
app.listen(port, () => {
  // connect to DB
  connectDB();
  console.log("Server started listening on port", port);
});
