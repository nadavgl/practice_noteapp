const express = require('express')
const path = require('path')

const app = express();
const notes = [
  {
    id: 1,
    text: 'Note one'
  },
  {
    id: 2,
    text: 'Note two'
  }
]


// Base route - domain.com (root route) is represented by a '/' - this slash directly follows the domain (domain.com/)
// Middleware - adding a layer to the server :onion" or removing a layer from the onion

app.use(express.static('./public'))


// app.get('/', (requestObj, responseObj) => {
//   responseObj.sendFile(path.join(__dirname, './public/index.html'));
// })

app.get('/about', (requestObj, responseObj) => {
  responseObj.sendFile(path.join(__dirname, './public/about.html'));
})

app.get('/note', (requestObj, responseObj) => {
  const id = requestObj.query.note_id;
  console.log(id)
  responseObj.sendFile(path.join(__dirname, './public/note.html'));
})

app.get('/notes', (requestObj, responseObj) => {
  responseObj.json(notes)
})

app.get('/api/notes', (requestObj, responseObj) => {
  responseObj.json(notes)
})

app.get('/api/note/:noteId', (requestObj, responseObj) => {
  const id = requestObj.params.noteId
  
  const note = notes.find(noteObj => noteObj.id == id)


  responseObj.json(note);
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

