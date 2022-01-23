//cargamos los datos directamente del JSON para hacer el REST
let restaurants = require('../database/restaurants.json');

const getRestaurants = (req, res, next) => {
  try {
    res.status(200).json({
      ok: 1,
      restaurants,
    });
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};

const findRestaurant = (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    if (!restaurant) throw { message: 'Restaurant not found', status: 404 };

    res.status(200).json({
      ok: 1,
      restaurant,
    });
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};

const deleteRestaurant = (req, res, next) => {
  const id = parseInt(req.params.id);
  try {
    const restaurant = restaurants.find((restaurant) => restaurant.id === id);
    if (!restaurant) throw { message: 'Restaurant not found', status: 404 };

    restaurants = restaurants.filter((restaurant) => restaurant.id !== id);

    res.status(200).json({
      ok: 1,
      message: `Restaurant ${id} deleted`,
    });
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};

const addRestaurant = (req, res, next) => {
  const { restaurant } = req.body;

  try {
    if (!restaurant) throw { message: 'Restaurant is required', status: 400 };

    const restaurantsIds = restaurants.map((restaurant) => restaurant.id);

    const maxId = Math.max(...restaurantsIds);

    const newId = maxId + 1;

    restaurant.id = newId;

    restaurants.push(restaurant);

    res.status(200).json({
      ok: 1,
      message: `Restaurant added with Id: ${newId}`,
    });
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};

const editRestaurant = (req, res, next) => {
  const id = parseInt(req.params.id);
  const { restaurant } = req.body;

  try {
    if (!id) throw { message: 'id is required', status: 400 };
    if (!restaurant) throw { message: 'Restaurant is required', status: 400 };

    const restIndex = restaurants.findIndex(
      (restaurant) => restaurant.id === id
    );
    if (restIndex === -1)
      throw { message: 'Restaurant id not found', status: 404 };

    restaurants[restIndex] = restaurant;
    restaurant.id = id;

    res.status(200).json({
      ok: 1,
      message: `Restaurant ${id} updated`,
    });
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};

module.exports = {
  getRestaurants,
  findRestaurant,
  deleteRestaurant,
  addRestaurant,
  editRestaurant,
};
