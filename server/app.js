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

// async function productionTable() {
//   try {
//     await db.query("DROP TABLE IF EXISTS goods");
//     console.log("✅ goods table dropped");
//   } catch (error) {
//     console.error("❌ Error dropping table:", error);
//   }
// }

productionTable()
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})