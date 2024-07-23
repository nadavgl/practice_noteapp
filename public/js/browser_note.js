const outputDiv = document.querySelector('.note')

const params = new URLSearchParams(window.location.search)
const noteId = params.get('note_id')

async function getNote() {
    const res = await fetch ('/api/note/' + noteId)
    const data = await res.json()

    outputDiv.innerHTML = `
    <h1>View Note</h2>
    <h2>${data.text}</h2>
    `
}

getNote();