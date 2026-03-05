// -----> BUILTIN MIDDLEWARE

import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/submit', (req, res) => {
    res.send('<h1>Submit Page</h1>')
})

app.get('/user', (req, res) => {
    res.send('<h1>User Page</h1>')
})

app.get('/login', (req, res) => {
    res.send(`
        <form action="/submit" method="post">   
            <input type="email" name="email" placeholder="Enter Email">
            <input type="password" name="password" placeholder="Enter Your Password">
            <button type="submit">submit</button>
        </form>        
        `)

})

app.listen(3000)