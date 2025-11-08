const express = require('express')
const db = require('../database/db')

const router = express.Router()
router.post('/admin/login', async(req, res)=>{
    const {email, password} = req.body;
   try {
        // Assuming this is in an async function
        const user = await db.query(
        'SELECT * FROM users WHERE email=$1 AND password=$2',
        [email, password]
        );

        if (user.rows.length > 0) {
        res.status(200).json({ user: user.rows[0] });
        } else {
        res.status(404).json({ message: 'Invalid email or password' });
        }
   } catch (err) {
    res.status(500).json({message:"Server Error"})
   }
})
router.get('/api', (req, res)=>{
    res.send("it is working")
})
module.exports = router