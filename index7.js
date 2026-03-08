// Template engine, EJS, Jade, PUG

import express from 'express';
import ejs from 'ejs';


const app = express()

// EJS

app.set('view engine','ejs');

app.get('/' , (req, res) => {

    res.render('home', {name : "Farzeena Minashik", para: "Minadi is the daughter of Toushik & Minakshi"})

})

app.listen(4000)