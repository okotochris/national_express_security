const express = require('express')
const db = require('../database/db.js')
const router = express.Router()

router.post('/api/register-goods', async (req, res)=>{
   const {senderName, receiverName, trackingNumber, description, arriveTime, destination, status} = req.body;
   try {
    const query = `INSERT INTO goods (sendername, receivername, trackingnumber, description, arriveTime, 
    destination, status) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`
    const result = await db.query(query, [senderName,receiverName, trackingNumber, description, arriveTime, destination, status])
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

//user getting their goods via their tracking code
router.get('/api/tracking_no/:trackingNumber', async (req, res) => {
  const { trackingNumber } = req.params; // works now
  try {
    const result = await db.query(
      "SELECT * FROM goods WHERE trackingNumber = $1",
      [trackingNumber]
    );

    if (result.rows.length > 0) {
      res.status(200).json(result.rows[0]);
    } else {
      res.status(404).json({ message: "Tracking number not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

router.delete("/api/delete", async (req, res) => {
  const { id } = req.query;

  try {
    const result = await db.query(
      "DELETE FROM goods WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ msg: "Deleted successfully" });
    } else {
      res.status(404).json({ msg: "Record not found" });
    }
  } catch (error) {
    console.error("Error deleting record:", error);
    res.status(500).json({ msg: "Server error" });
  }
});
router.patch("/api/status", async (req, res) => {
  const { id, status } = req.body;

  try {
    const result = await db.query(
      "UPDATE goods SET status = $1 WHERE id = $2 RETURNING *",
      [status, id]
    );

    if (result.rows.length > 0) {
      res.status(200).json({ msg: "Status updated successfully" });
    } else {
      res.status(404).json({ msg: "Record not found" });
    }
  } catch (err) {
    console.error("Error updating status:", err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router