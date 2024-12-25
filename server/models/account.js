// models/Account.js
const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  accountName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
