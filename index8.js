// Template Engine

import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs');


app.get('/adduser', (req, res) => {

    res.render('adduser')
})


app.post('/submituser', (req, res) => {

    res.render('submituser' , req.body)
})


app.listen(4000)