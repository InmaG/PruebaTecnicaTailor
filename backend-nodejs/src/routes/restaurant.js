const express = require('express');

const router = express.Router();

const {
  getRestaurants,
  findRestaurant,
  deleteRestaurant,
  addRestaurant,
  editRestaurant,
} = require('../controllers/restaurant');

router.get('/', getRestaurants);

router.get('/:id', findRestaurant);

router.delete('/:id', deleteRestaurant);

router.post('/', addRestaurant);

router.put('/:id', editRestaurant);

module.exports = router;
