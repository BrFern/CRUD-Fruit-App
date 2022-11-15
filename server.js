const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

// Connection to Database //

// Middleware //

// Routes //

//I.N.D.U.C.E.S

//Index, New, Delete, Update, Create, New, Edit, Show

//Index
app.get('/fruits', (req,res) => {
    res.send(fruits);
});

//New

//Delete

//Update

//Create

//New

//Edit

//Show
app.listen(3000, () => {
    console.log('listening');
});





