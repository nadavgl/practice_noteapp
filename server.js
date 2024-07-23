const express = require('express')
const path = require('path')

const app = express()

// Import Routes

const api_routes = require('./routes/api_routes')
const view_routes = require('./routes/view_routes')



// Base route - domain.com (root route) is represented by a '/' - this slash directly follows the domain (domain.com/)
// Middleware - adding a layer to the server :onion" or removing a layer from the onion


//Middleware 
app.use(express.static('./public'))

// Allow form data to be attached in our routes

app.use(express.urlencoded({extended: false}))

// Loud Routes
app.use('/', view_routes)
app.use('/api', api_routes)



app.get('*', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, './public/notfound.html'));

})


app.listen(3333, () => {
  console.log('Server started')
})

