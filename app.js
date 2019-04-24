const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

// Connect To Database
mongoose.connect(config.database, {useNewUrlParser: true});

mongoose.connection.on('connected', () => {
  console.log('connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('db err' + err);
});

// Initialize Express
const app = express();
const users = require('./routes/users')

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
  res.send('invalid point')
});

// Start Server
app.listen(port, () => {
  console.log('server started on' + port);
});


