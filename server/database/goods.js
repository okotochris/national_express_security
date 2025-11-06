async function goods(){
    const db = require('./db.js')
    try {
        await db.query(`CREATE TABLE IF NOT EXISTS goods(
            id SERIAL PRIMARY KEY,
            senderName TEXT,
            receiverName TEXT,
            trackingNumber TEXT UNIQUE,
            description TEXT,
            weight TEXT,
            destination TEXT,
            location TEXT
            )`)
         console.log("✅ Goods table created");
    } catch (err) {
         console.log("❌ Error creating table:", err);
    }
}

module.exports = goods;