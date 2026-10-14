import db from "../config/database.js";
import bwipjs from "bwip-js";

export const generateBarcode = async (req, res) => {
  try {
    const { text } = req.body;

    // Validate input
    if (
      typeof text !== "string" ||
      text.trim().length === 0 ||
      text.length > 200
    ) {
      return res.status(400).json({
        error: "text must be a non-empty string (max 200 characters)",
      });
    }

    // Generate Code128 barcode as PNG
    const png = await bwipjs.toBuffer({
      bcid: "code128",
      text,
      scale: 3,  
      height: 10,
      includetext: true,
    });

    // Save generation history in SQLite
    const barcode_history = db.prepare(`
      INSERT INTO generation_history
        (type, input_preview, created_at)
      VALUES (?, ?, ?)
    `);

    barcode_history.run(
      "barcode",
      text.slice(0, 50),
      new Date().toISOString()
    );

    // Return PNG response
    res.set("Content-Type", "image/png");
    return res.status(200).send(png);

  } catch (error) {
    console.error("Barcode generation failed");

    return res.status(500).json({
      error: "Failed to generate barcode",
    });
  }
};