const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const entry = require('./routes/entry.route');

const API_PORT = 3001;
const app = express();
app.use(cors());
const dbRoute = 'mongodb+srv://admin:Or7XXfw3WCRbi1HF@phonebook-q7m81.mongodb.net/phonebook?retryWrites=true&w=majority';

// connect to db
mongoose.connect(dbRoute, {useNewUrlParser: true});

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// check if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// parse the request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(logger('dev'));

// add routes
app.use('/api', entry);

// launch backend into a port
app.listen(API_PORT, () => console.log('Server is up and running on port number ' + API_PORT));
