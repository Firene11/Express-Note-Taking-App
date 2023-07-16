const express = require('express');
const path = require('path');
const api = require('./public/notes.html');
const {v4: uuid} = require('uuid');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));



