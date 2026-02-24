const express = require('express');


const app = express();

// function test() {
    
// }

// test()

// console.log(app);

app.get('/', (req, res) =>{
    res.send("<h1>Chachi ki chat lo...</h1>")

});

app.get('/cbon', (req, res) =>{
    res.send("<h1>Chachato Bon...</h1>")

});

app.get('/kbon', (req, res) =>{
    res.send("<h1>Khalato Bon...</h1>")

});

app.listen(5554)