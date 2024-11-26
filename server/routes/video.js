import express from "express";
import { createVideo } from "../controllers/video.js";

const router = express.Router();

// http://localhost:5000/api/videos/
router.post("/api/videos", createVideo);

export default router;