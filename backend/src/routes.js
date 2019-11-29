const multer = require('multer');
const express = require('express');

const uploadConfig = require('./config/upload');
const Spot = require('./controllers/SpotController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Sessions
routes.post('/sessions', SessionController.store);

// Spots
routes.get('/spots', Spot.index);

routes.post('/spots', upload.single('thumbnail'), Spot.store);

module.exports = routes;