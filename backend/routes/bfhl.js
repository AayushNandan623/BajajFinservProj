import express from "express";
import { postBfhl, getBfhl } from "../controllers/bfhlController.js";

const router = express.Router();

// POST /bfhl
router.post("/", postBfhl);

// GET /bfhl
router.get("/", getBfhl);

export default router;
