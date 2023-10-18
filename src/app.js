const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hello word!');
})

app.post('/', (req, res) => {
    res.send('This is a post request!');
})


app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
})