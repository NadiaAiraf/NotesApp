const express = require('express');
const app = express();
const port = 3000;
var path = require('path');

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname +'/note-model.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
