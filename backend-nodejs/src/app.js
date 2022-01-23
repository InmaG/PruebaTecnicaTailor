'use Strict';

const express = require('express');

const cors = require('cors');
const helmet = require('helmet');

const restaurantRoutes = require('./routes/restaurant');
const userRoutes = require('./routes/user');

const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

//middlewares
app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas
app.use('/api/restaurants', restaurantRoutes);
app.use('/api', userRoutes);

app.use(errorMiddleware);

module.exports = app;
