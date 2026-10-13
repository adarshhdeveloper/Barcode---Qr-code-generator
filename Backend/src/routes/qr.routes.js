import { Router } from "express";
import { generateQR } from "../controllers/qr.controller.js";

const router = Router();

/**
 * @route POST /api/qr
 * @desc Generate QR code
 * @access Public
 */
router.post("/qr", generateQR);

export default router;