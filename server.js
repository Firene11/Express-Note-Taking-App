const express = require('express');
const path = require('path');
const api = require('./public/notes.html');
const {v4: uuid} = require('uuid');

const PORT = 3001;

const app = express();

