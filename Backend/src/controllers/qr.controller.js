import db from "../config/database.js";
import QRCode from "qrcode";

export const generateQR = async (req, res) => {
  try {
    const { text } = req.body;

    if (
      typeof text !== "string" ||
      text.trim().length === 0 ||
      text.length > 200
    ) {
      return res.status(400).json({
        error: "text must be a non-empty string (max 200 characters)",
      });
    }

    const png = await QRCode.toBuffer(text, {
      type: "png",
    });

    const stmt = db.prepare(`
      INSERT INTO generation_history
        (type, input_preview, created_at)
      VALUES (?, ?, ?)
    `);

    stmt.run(
      "qr",
      text.slice(0, 50),
      new Date().toISOString()
    );

    res.set("Content-Type", "image/png");
    return res.status(200).send(png);
  } catch (error) {
    console.error("QR generation failed");

    return res.status(500).json({
      error: "Failed to generate QR code",
    });
  }
};