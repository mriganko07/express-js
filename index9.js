import express from 'express';

const app = express()

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))



app.get('/user', (req, res) => {

    let users = ["Mriganka", "Adhip", "Chachi"];
    // let isLogin = true;
    res.render('users', { users : users , isLogin:false})

})

app.get('/adduser', (req, res) => {

    res.render('adduser')

})

app.post('/submituser', (req, res) => {

    res.render('submituser', req.body)

})

app.listen(4000)