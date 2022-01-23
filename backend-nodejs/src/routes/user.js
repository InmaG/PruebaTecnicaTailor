const express = require('express');

const router = express.Router();

const {
  signUp,
  login,
  auth,
  getFavRestaurants,
  updateFavRestaurants,
} = require('../controllers/user.js');

router.post('/auth', auth);

router.post('/signup', signUp);

router.post('/login', login);

router.get('/user/favs', auth, getFavRestaurants);

router.put('/user/favs', auth, updateFavRestaurants);

module.exports = router;
