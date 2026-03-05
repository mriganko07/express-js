// -----> ROUTE MIDDLEWARE


import express from 'express';

const app = express()


function agecheck(req, res, next) {

    console.log(req.query.age);

    if (!req.query.age || req.query.age < 18) {
        res.end('<h1>You cannot access this page</h1>')
    }

    else {
        next()
    }

}


function checkurl(req, res, next) {

    console.log("This request url is : ", req.url);

    next();
    
}

// app.use(agecheck)


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})


app.get('/user', agecheck, checkurl , (req, res) => {
    res.send('<h1>User Page</h1>')
})


app.get('/products', agecheck, (req, res) => {
    res.send('<h1>Products Page</h1>')
})


app.get('/login', checkurl, (req, res) => {
    res.send('<h1>Login Page</h1>')
})


app.listen(3000)