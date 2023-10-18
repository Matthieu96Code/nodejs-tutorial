const express = require('express');
const app = express();
const PORT = 3000;

const json = {
    "name": "Caleb Curry",
    "industry": "Music",
    "favoriteColors": [
        "red",
        "blue",
        "green"
    ],
    "favoriteNumber": [
        5,
        3,
        7
    ],
    "favoritePeople": [
        {
            name: "nom",
            relationship: "parent"
        },
        {
            name: "dad",
            relationship: "parent"
        }
    ]
}

app.get('/', (req, res) => {
    res.send({"data": json.favoritePeople});
})

app.post('/', (req, res) => {
    res.send('This is a post request!');
})


app.listen(PORT, () => {
    console.log('App listening on port ' + PORT);
})