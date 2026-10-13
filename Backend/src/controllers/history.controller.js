import db from "../config/database.js";

export const getHistory = (req, res) => {
  try {
    const history = db
      .prepare(`
        SELECT id, type, input_preview, created_at
        FROM generation_history
        ORDER BY id DESC
        LIMIT 10
      `)
      .all();

    return res.status(200).json(history);
  } catch (error) {
    console.error("Failed to fetch history");

    return res.status(500).json({
      error: "Failed to fetch generation history",
    });
  }
};