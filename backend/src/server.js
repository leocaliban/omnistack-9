const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
mongoose.connect('mongodb+srv://leocaliban:leocaliban@cluster0-lt070.mongodb.net/09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uplpads')));
app.use(routes);

app.listen(3333);