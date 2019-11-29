const multer = require('multer');
const express = require('express');

const uploadConfig = require('./config/upload');
const SpotController = require('./controllers/SpotController');
const SessionController = require('./controllers/SessionController');
const BookingController = require('./controllers/BookingController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();
const upload = multer(uploadConfig);

// Sessions
routes.post('/sessions', SessionController.store);

// Spots
routes.get('/spots', SpotController.index);

routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot_id/bookings', BookingController.store);

// Dashboard
routes.get('/dashboard', DashboardController.show);



module.exports = routes;