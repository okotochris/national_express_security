const express = require('express')
const db = require('./database/db.js')
const goodsRoute = require('./routes/goods.js')
const contact = require('./routes/contact.js')
const cors = require('cors')
const loginRoute = require('./routes/login.js')


const app = express()
app.use(express.json())
app.use(cors())
app.use(goodsRoute)
app.use(contact)
app.use(loginRoute)

async function productionTable() {
  try {
    await Promise.all([
        await db.query("ALTER TABLE goods ADD COLUMN  IF NOT EXISTS image TEXT"),
        await db.query("ALTER TABLE goods ADD COLUMN  IF NOT EXISTS public_id TEXT")
    ])
    console.log("✅ 'image'and 'public_id' column added to goods table");
  } catch (error) {
    console.error("❌ Error adding column to goods table:", error);
  }
}

productionTable()
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})