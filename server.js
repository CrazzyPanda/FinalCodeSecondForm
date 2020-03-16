const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const customersRouter = require('./routes/customers');

app.use(body_parser.json());
app.use(cors());
app.use('/customers', customersRouter);

const uri = process.env.ATLAS_URI;
const Dropdown = require("./models/Dropdown");

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
function(err){
    if(err){
        throw err;
    }
    else {
        console.log(`Successfully Connected`);
    }
});

app.get("/", (req, res) => {
    res.json({message: "You are in the route route"});
})

const port = 4000;

app.listen(port, () => {
    console.log(`Server listening ${port}`);
});


app.post("/dropdown/", (req, res) => {
    console.log(req.body);
    res.json({message: "You created a dropdown field"});
    new Dropdown(req.body).save();
});


app.get("/dropdown/:name", (req, res) => {
    Dropdown.find({name: req.params.name})
        .then(dropdown => res.json(dropdown))
        .catch(err => res.status(400).json('Error: ' + err)); //status 400 means bad request
        console.log("You are trying to get all dropdowns")
});
