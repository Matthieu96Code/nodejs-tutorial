const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

const customers = [
    {
        "name": "Caleb",
        "industry": "music"
    },
    {
        "name": "John",
        "industry": "networking"
    },
    {
        "name": "Sal",
        "industry": "sports medecine"
    },
]

app.get('/', (req, res) => {
    res.send("Welcome!");
})

app.get('/api/customers', (req, res) => {
    res.send({"customers": customers});
})

app.post('/api/customers', (req, res) => {
    console.log(req.body);
    res.send(req.body );
})

app.post('/', (req, res) => {
    res.send('This is a post request!');
})

const start = async() => {
    try {
        await mongoose.connect('mongodb+srv://senoumatthieu96:matthstane@cluster0.7in6khd.mongodb.net/?retryWrites=true&w=majority');
    
        app.listen(PORT, () => {
            console.log('App listening on port ' + PORT);
        });
    } catch(e) {
        console.log(e.message)
    }
};

start();