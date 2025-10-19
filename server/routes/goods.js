const express = require('express')
const db = require('../database/db.js')
const router = express.Router()

router.post('/api/register-goods', async (req, res)=>{
    console.log(req.body)
})

router.get('/api/goods', async(req, res)=>{
    try {
        const result = await db.query('SELECT * FROM goods ORDER BY id DESC')
        console.log(result.rows)
        res.status(200).json(result.rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({msg:"Server Error"})
    }
})
module.exports = router