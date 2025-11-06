const express = require('express')
const db = require('./database/db.js')
const goodsRoute = require('./routes/goods.js')
const contact = require('./routes/contact.js')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())
app.use(goodsRoute)
app.use(contact)


const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})