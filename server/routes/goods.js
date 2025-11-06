const express = require('express')
const db = require('../database/db.js')
const router = express.Router()

router.post('/api/register-goods', async (req, res)=>{
   const {senderName, receiverName, trackingNumber, description, weight, destination} = req.body;
   try {
    const query = `INSERT INTO goods (sendername, receivername, trackingnumber, description, weight, 
    destination) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`
    const result = await db.query(query, [senderName,receiverName, trackingNumber, description, weight, destination])
    if(result.rowCount > 0){
        res.status(200).json(result.rows)
    }
   } catch (err) {
    res.status(500).json({msg:"Server error"})
    console.log(err)

   }
})
router.put('/api/goods/location', async (req, res) => {
  const { id } = req.query;
  const { location } = req.body;

  console.log('Updating goods:', { id, location });

  try {
    const query = `UPDATE goods SET location = $1 WHERE id = $2 RETURNING *`;
    const result = await db.query(query, [location, id]);

    if (result.rowCount > 0) {
      res.status(200).json(result.rows[0]); // return the updated row only
    } else {
      res.status(404).json({ msg: 'Goods not found' });
    }
  } catch (err) {
    console.error('Error updating goods location:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

router.get('/api/goods', async(req, res)=>{
    try {
        const result = await db.query('SELECT * FROM goods ORDER BY id DESC')
        res.status(200).json(result.rows)
    } catch (err) {
        console.log(err)
        res.status(500).json({msg:"Server Error"})
    }
})
module.exports = router