import Database from "better-sqlite3";

const db = new Database("./database.sqlite");

db.exec(`
  CREATE TABLE IF NOT EXISTS generation_history (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    type TEXT NOT NULL,
    input_preview TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
`);

console.log("SQLite database connected successfully");

export default db;