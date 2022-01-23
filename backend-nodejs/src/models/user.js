const mongoose = require('../database/database');
const SHA256 = require('crypto-js/sha256');
const validateEmail = require('../utils/validateEmail');
const validatePassword = require('../utils/validatePassword');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'email no válido.'],
  },
  password: {
    type: String,
    validate: [
      validatePassword,
      'La contraseña debe tener al menos 6 caracteres',
    ],
    required: true,
  },
  restaurantList: {
    type: [Number],
    default: [],
  },
});

userSchema.pre('save', function (next) {
  const user = this;

  user.password = SHA256(user.password);
  next();
});

userSchema.pre('findOneAndUpdate', async function (next) {
  let update = { ...this.getUpdate() };

  // Only run this function if password was modified
  if (update.password) {
    // Hash the password
    update.password = SHA256(update.password);
    this.setUpdate(update);
    next();
  }
});
const User = mongoose.model('User', userSchema);

module.exports = User;
