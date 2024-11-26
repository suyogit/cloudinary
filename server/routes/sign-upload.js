import express from "express";
import { generateSignature } from "../controllers/sign-upload.js";

const router = express.Router();

// http://localhost:5000/api/sign-upload

router.post("/api/sign-upload", generateSignature);

export default router;
