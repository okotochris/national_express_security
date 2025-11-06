const express = require('express')
const sendEmail = require('../utilities/emailHandler.js')
const formartEmail = require('../utilities/formartEmail.js')

const router = express.Router()

router.post('/api/contact', async(req, res)=>{
   const {email, message, fullname, contact} = req.body;
   const htmlContent = formartEmail(email, fullname,  message, contact)
   try {
        await sendEmail('okotoazachristain@gmal.com', "Checking", htmlContent)
        res.status(200).json({msg:"message sent ✅"})
   } catch (error) {
    res.status(500).json({msg:"server error"})
    console.log(error)
   }
})


module.exports = router;