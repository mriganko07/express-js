// const express = require('express')

import express from 'express';
// import home, { contact } from './pages/home.js';
// import home from './pages/home.js';
// import login from './pages/login.js';
// import submit from './pages/submit.js';
// import about from './pages/about.js';
// import path from 'path';

const app = express()
// const about_path = path.resolve('view')
// const public_path = path.resolve('public')

// console.log(public_path);

// app.use(express.static(public_path))

// app.get('/', (req, res) => {
//   res.send(home())
// })


// app.get('/chachi', (req, res) => {
//   res.send(about())
// })


// app.get('/toushik', (req, res) => {
//   res.send(contact())
// })


// app.get('/adhip', (req, res) => {
//   res.send('<h1>Adhip loves Toushik</h1>')
// })


// app.get('/brand', (req, res) => {
//   res.send('<h1>I am the brand</h1>')
// })


// app.get('/login', (req, res) => {
//   res.send(login())
// })


// app.post('/submit', (req, res) => {
//   res.send(submit())
// })



// app.get('/', (req, res) => {
//   // console.log(__dirname);
//   // const absolute_path = path.resolve('view/home.html')

//   // console.log(absolute_path);

//   res.sendFile(about_path + "/home.html");
// })

// app.get('/login', (req, res) => {

//   // const login_path = path.resolve('view/login.html')

//   res.sendFile(about_path + "/login.html");

// })

// app.get('/about', (req, res) => {

//   // const about_path = path.resolve('view/about.html')

//   res.sendFile(about_path + "/about.html");

// })


// app.use((req, res) =>{ // ---> app.use holo multi purpose function

//   // const about_path = path.resolve('view/404.html')

//   // res.sendFile(about_path);

//   res.status(404).sendFile(about_path + "/404.html")
// })


// function checkroute(req, res, next) {
// console.log("User is accessing " + req.url + " Page");
// next()
// }

// app.use((req, res, next) => {
//   console.log("User is accessing " + req.url + " Page");
//   next()
// })


app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})


// app.get('/user', (req, res) => {
//   res.send('<h1>User Page</h1>')
// })


// app.get('/products', (req, res) => {
//   res.send('<h1>Products Page</h1>')
// })






 /* -----------------------------------------------
 --------- This is global Middleware --------------
 -------------------------------------------------- */



 

// function agecheck(req, res, next) {
//   if (!req.query.age || req.query.age<18) {
//     res.end('<h1>You cannot access this page</h1>')
//   }

//   else{
//     next()
//   }
// }

// app.use(agecheck)

// app.get('/login', (req, res) => {
//   res.send('<h1>Login Page</h1>')
// })


// app.get('/admin', (req, res) => {
//   res.send('<h1>Admin Page</h1>')
// })


function ip_check(req, res, next) {
  const ip = req.socket.remoteAddress
  console.log(ip);

  if (ip.includes('10.129.68.58')) {
    res.send("fuck off")
  }

  else {
    next()
  }
}

app.use(ip_check)


app.listen(3000)