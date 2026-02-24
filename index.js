// const express = require('express')

import express from 'express';
// import home, { contact } from './pages/home.js';
import home from './pages/home.js';
import login from './pages/login.js';
import submit from './pages/submit.js';
import about from './pages/about.js';
import path from 'path';

const app = express()

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



app.get('/', (req, res) => {
  // console.log(__dirname);
  const absolute_path = path.resolve('view/home.html')

  // console.log(absolute_path);
  
  res.sendFile(absolute_path);
})

app.get('/login', (req, res) => {

  const login_path = path.resolve('view/login.html')
  
  res.sendFile(login_path);

})

app.get('/about', (req, res) => {

  const about_path = path.resolve('view/about.html')
  
  res.sendFile(about_path);

})


app.listen(3000)