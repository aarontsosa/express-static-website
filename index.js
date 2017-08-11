const express = require('express')
const app = express();

const db = {
    1001: {
        author: 'oakly',
        title: 'my food is not yours',
        year: 2005
    },
    1002: {
        author: 'chrisaquino',
        title: 'where is my burbon',
        year: 2017
    }
}

app.get('/books/:bookId', (req, res) => {
    let bookId = req.params.bookId;
    let bookInfo = db[bookId];
    let respText = `
    <h1>${db[bookId]}</h1>
    <h2>${db[bookInfo.title]}</h2>
    <h2>${db[bookInfo.author]}</h2>
    <h2>${db[bookInfo.year]}</h2>
    `
    res.end(respText)
})

app.listen(3456, () => {
    console.log("listening on 3456! AY!")
})