const express = require('express')
const db = require('./database/db.js')
const goodsRoute = require('./routes/goods.js')


const app = express()
app.use(express.json())
app.use(goodsRoute)



const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})