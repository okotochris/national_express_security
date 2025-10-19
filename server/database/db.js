const pg = require('pg')
require('dotenv').config()
const user = require('./user.js')
const goods = require('./goods.js')

const isProduction = process.env.NODE_ENV === 'production'

const db = 
isProduction ?

new pg.Client({
    connectionString: process.env.DATABASE_URL,
    ssl:{
        rejectUnauthorized: false
    }
})
:
new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT)
})


db.connect()
.then(result=>{
    console.log("✅ connnected to db")
    user()
    goods()
}).catch(err=>{
    console.log(err)
})

module.exports = db;