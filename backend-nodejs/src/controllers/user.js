const SHA256 = require('crypto-js/sha256');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const auth = async (req, res, next) => {
  const { authorization } = req.headers;

  try {
    const token = authorization?.split(' ')[1];

    if (!token) throw { message: 'token requerido', status: 403 };

    try {
      const secret = process.env.SECRET || 'secretKey';
      jwt.verify(token, secret);
    } catch (error) {
      throw { message: 'token inválido', status: 403 };
    }

    const { email } = jwt.decode(token);
    if (!email) throw { message: 'token inválido', status: 403 };

    req.email = email;
    next();
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};

const signUp = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw { status: 402, message: 'email & password required' };
  }

  const newUser = new User({
    email,
    password,
  });
  try {
    const result = await newUser.save();
    res.status(200).send({
      OK: 1,
      message: 'usuario añadido',
      idUser: result.idUser,
    });
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};
const login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log({ email, password });

  try {
    if (!email || !password) {
      next({ status: 402, message: 'email y contraseña requeridos' });
    }
    const hashedPass = SHA256(password).toString();

    const user = await User.findOne({ email, password: hashedPass });

    if (!user) {
      throw { status: 401, message: 'contraseña inválida para ese email' };
    }

    const secret = process.env.SECRET || 'secretKey';

    const token = jwt.sign({ email }, secret, { expiresIn: '7d' });

    res.status(200).json({ ok: 1, message: 'Usuario logado', token });
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};

const getFavRestaurants = async (req, res, next) => {
  try {
    const { email } = req;
    if (!email)
      throw { message: 'Es necesario autenticarse previamente', status: 403 };

    const user = await User.findOne({ email });

    if (!user) throw { message: 'Usuario no encontrado', status: 404 };

    res.status(200).json({ ok: 1, email, favs: user.restaurantList });
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};

const updateFavRestaurants = async (req, res, next) => {
  try {
    const { email } = req;
    const { favRestaurants } = req.body;
    if (!email)
      throw { message: 'Es necesario autenticarse previamente', status: 403 };

    if (!Array.isArray(favRestaurants))
      throw {
        message: 'formato de restaurantes favoritos incorrecto',
        status: 402,
      };

    const user = await User.findOne({ email });
    if (!user) throw { message: 'Usuario no encontrado', status: 404 };

    user.restaurantList = favRestaurants;

    await user.save();

    res
      .status(200)
      .json({
        ok: 1,
        message: 'Restaurantes favoritos actualizados',
        email,
        favs: user.restaurantList,
      });
  } catch (error) {
    const status = error.status || 500;
    next({ message: error.message, status });
  }
};

module.exports = {
  auth,
  signUp,
  login,
  getFavRestaurants,
  updateFavRestaurants,
};
