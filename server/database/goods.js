async function goods(){
    const db = require('./db.js')
    try {
        await db.query(`CREATE TABLE IF NOT EXISTS goods(
            id SERIAL PRIMARY KEY,
            senderName TEXT,
            receiverName TEXT,
            trackingNumber TEXT,
            description TEXT,
            weight TEXT,
            destination TEXT
            )`)
         console.log("✅ Goods table created");
    } catch (err) {
         console.log("❌ Error creating table:", err);
    }
}

module.exports = goods;