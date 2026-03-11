const express = require('express')
const db = require('../database/db.js')
const multer = require("multer")
const cloudinary = require("../utilities/cloudinary.js")




const router = express.Router()
const upload = multer({dest:"uploads/"})

router.post('/api/register-goods', upload.single('image'), async (req, res) => {
  try {
    const { senderName, receiverName, trackingNumber, description, arriveTime, destination, status } = req.body;
    const filePath = req.file.path;

    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(filePath, { folder: 'my_uploads' });

    // Save to PostgreSQL
    const query = `
      INSERT INTO goods (sendername, receivername, trackingnumber, description, arrivetime, destination, status, image, public_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      RETURNING *
    `;
    const values = [
      senderName,
      receiverName,
      trackingNumber,
      description,
      arriveTime,
      destination,
      status,
      uploadResult.secure_url,   // ✅ image URL
      uploadResult.public_id,    // ✅ useful for deletion later
    ];

    const dbResult = await db.query(query, values);

    res.status(200).json({
      success: true,
      data: dbResult.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});
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
    // 1️⃣ Get the record first to retrieve public_id
    const recordResult = await db.query("SELECT public_id FROM goods WHERE id = $1", [id]);

    if (recordResult.rows.length === 0) {
      return res.status(404).json({ msg: "Record not found" });
    }

    const { public_id } = recordResult.rows[0];

    // 2️⃣ Delete image from Cloudinary if public_id exists
    if (public_id) {
      await cloudinary.uploader.destroy(public_id);
    }

    // 3️⃣ Delete the record from PostgreSQL
    const deleteResult = await db.query(
      "DELETE FROM goods WHERE id = $1 RETURNING *",
      [id]
    );

    res.status(200).json({ msg: "Deleted successfully", data: deleteResult.rows[0] });
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