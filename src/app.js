const express = require('express');
const mongoose = require('mongoose');
const Customer = require('./models/customer');

const app = express();
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const PORT = process.env.PORT || 3000;
const CONNECTION = process.env.CONNECTION;

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
];

const customer = new Customer({
    name: 'john',
    industry: 'marketing'
});

app.get('/', (req, res) => {
    res.send("welcome!");
})

app.get('/api/customers', async(req, res) => {
    console.log(await mongoose.connection.db.listCollections().toArray());
    try{
        const result = await Customer.find();
        res.json({"customers": result});
    } catch(e) {
        res.status(500).json({error: e.message});
    }
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
        await mongoose.connect(CONNECTION);
    
        app.listen(PORT, () => {
            console.log('App listening on port ' + PORT);
        });
    } catch(e) {
        console.log(e.message)
    }
};

start();