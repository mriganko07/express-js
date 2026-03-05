// -----> BUILTIN MIDDLEWARE

import express from 'express';
import path from 'path';


const app = express()
const about_path = path.resolve('view')


// ---> This is used for importing CSS
const public_path = path.resolve('public')
app.use(express.static(public_path))


app.get('/', (req, res) => {
    // res.send('<h1>Home Page</h1>')
    res.sendFile(about_path + "/home.html");
})

app.get('/user', (req, res) => {
    res.send('<h1>User Page</h1>')
})

app.use(express.urlencoded({ extended: false }))

app.get('/login', (req, res) => {
    res.send(`
        <form action="/submit" method="post">   
            <input type="email" name="email" placeholder="Enter Email">
            <input type="password" name="password" placeholder="Enter Your Password">
            <button type="submit">submit</button>
        </form>        
        `)

})


app.post('/submit', (req, res) => {

    console.log("User Login Details are : ", req.body);
    res.send('<h1>Submit Page</h1>')
})


app.listen(3000)