import { Router } from "express";
import { generateBarcode } from "../controllers/barcode.controller.js";

const router  = Router() 


/**
 * @route POST /api/barcode
 * @desc Generate barcode
 * @access Public   
 */
router.post("/barcode",generateBarcode)

export default router