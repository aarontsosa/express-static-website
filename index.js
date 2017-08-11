const express = require('express')
const app = express();

app.use(express.static('public/ethereum'))
app.listen(4900,  () => {
    console.log('listening on 4900')
});


// const db = {
//     1001: {
//         author: 'oakly',
//         title: 'my food is not yours',
//         year: 2005
//     },
//     1002: {
//         author: 'chrisaquino',
//         title: 'where is my burbon',
//         year: 2017
//     }
// }

// app.get('/books/:bookId', (req, res) => {
//     let bookId = req.params.bookId;
//     let bookInfo = db[bookId];
//     if (!bookInfo) {
//         bookInfo = {
//             "author": "",
//             "year": "",
//             "title": `Book ID ${bookId} not found`
//         }
//     }
//     let respText = `
//     <h1>${bookInfo.title}</h1>
//     <h2>${bookInfo.author}</h2>
//     <h2>${bookInfo.year}</h2>
//     `
//     res.end(respText)
// })

// app.get('/books/:bookId/:key', (req, res) => {
//     let bookId = req.params.bookId;
//     let bookInfo = db[bookId];
//     let key = req.params.key
//     if (!bookInfo) {
//         let errorMsg = `Book ID ${bookId} not found`
//         bookInfo = {
//             "author": errorMsg,
//             "year": errorMsg,
//             "title": errorMsg
//         }
//     }
//     let respText = `
//     <h1>${bookInfo.title}</h1>
//     <h2>${bookInfo.author}</h2>
//     <h2>${bookInfo.year}</h2>
//     `
//     res.end(respText)
// })


// app.listen(3456, () => {
//     console.log("listening on 3456! AY!")
// })