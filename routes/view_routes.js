const router = require('express').Router();
const path = require('path')
const uuid = require('uuid')



router.get('/about', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, '../public/about.html'));
})


router.get('/note', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, '../public/note.html'));
})

// Receiving form data to create a note and sends the userback to the home page


module.exports = router