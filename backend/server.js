const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const item = require('./routes/item.route');
const category = require('./routes/category.route');

const API_PORT = 3001;
const app = express();
app.use(cors());
const dbRoute = 'mongodb+srv://admin:yO8zBSBv5M4ccFLF@groceries-jxsdg.mongodb.net/groceries?retryWrites=true&w=majority';

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
app.use('/api', item);
app.use('/api', category);

// launch backend into a port
app.listen(API_PORT, () => console.log('Server is up and running on port number ' + API_PORT));
