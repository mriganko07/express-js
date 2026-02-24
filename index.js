// const express = require('express')

import express from 'express';
import home, {contact} from './pages/home.js';
import about from './pages/about.js';

const app = express()

app.get('/', (req, res) => {
  res.send(home())
})

app.get('/chachi', (req, res) => {
  res.send(about())
})

app.get('/toushik', (req, res) => {
  res.send(contact())
})

app.get('/adhip', (req, res) => {
  res.send('<h1>Adhip loves Toushik</h1>')
})

app.get('/brand', (req, res) => {
  res.send('<h1>I am the brand</h1>')
})

app.listen(3000)