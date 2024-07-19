const express = require('express')
const path = require('path')

const app = express();


// Base route - domain.com (root route) is represented by a '/' - this slash directly follows the domain (domain.com/)
// Middleware - adding a layer to the server :onion" or removing a layer from the onion

app.use(express.static('./public'))


// app.get('/', (requestObj, responseObj) => {
//   responseObj.sendFile(path.join(__dirname, './public/index.html'));
// })

app.get('/about', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, './public/about.html'));
})



// // The wild card route MUST be below all other routes


// app.get('/images/sad-dino.png', (requestObj, responseObj) => {
//   responseObj.sendFile(path.join(__dirname, './public/images/sad-dino.png'));

// // })


// app.get('/css/style.css', (requestObj, responseObj) => {
//   responseObj.sendFile(path.join(__dirname, './public/css/style.css'));

// })

app.get('*', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, './public/notfound.html'));

})


app.listen(3333, () => {
  console.log('Server started')
})

