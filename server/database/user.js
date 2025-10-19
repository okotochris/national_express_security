

async function user() {
    const db = require('./db.js');
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT,
        password TEXT,
        fullname TEXT
      )
    `);
    console.log("✅ Users table created");
  } catch (error) {
    console.log("❌ Error creating table:", error);
  }
}

module.exports = user;
