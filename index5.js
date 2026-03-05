// -----> THIRDPARTY MIDDLEWARE

import express from 'express';
import morgan from 'morgan';

const app = express()

app.use(morgan('dev'))

app.get('/' , (req , res) =>{

    res.send('<h1>This is Home Page</h1>')
})


app.get('/user' , (req , res) =>{

    res.send('<h1>This is Login Page</h1>')
})


app.get('/wait' , (req , res) =>{

    setTimeout(() => {res.send("Response After 3sec")} , 3000)
    // res.send('<h1>This is Wait page</h1>')
})

app.listen(3000)
