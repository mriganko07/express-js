// ERROR HANDELING MIDDLEWARE

import { error } from 'console';
import express from 'express';

import path from 'path';

const about_path = path.resolve('view');

const app = express()

app.get('/', (req, res) => {

    res.send('<h1>This is ROOT page.</h1>')

})

app.get('/error', (req, res , next) => {

    // res.gend('<h1>This is Error page.</h1>')
    const error = new Error('');
    error.status = 404;
    next(error);
    
})

app.get('/user', (req, res) => {

    res.send('<h1>This is User page.</h1>')

})

// function error_handel


app.use((err, req, res, next) => {

    res.status(err.status || 500).sendFile(about_path + "/404.html");
})


app.listen(3000)