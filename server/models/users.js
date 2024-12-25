const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accounts: [{
    accountName: String,
    accountNumber: String,
    amount: Number
  }]
});

module.exports = mongoose.model('User', userSchema);
