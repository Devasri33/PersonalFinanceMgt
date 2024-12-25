const Account = require('../models/Account');

// Add an account
const addAccount = async (req, res) => {
  try {
    const { accountName, accountNumber, amount } = req.body;

    if (!accountName || !accountNumber || !amount) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newAccount = new Account({
      accountName,
      accountNumber,
      amount
    });

    await newAccount.save();
    res.status(201).json({ message: 'Account added successfully', account: newAccount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all accounts
const getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete an account
const deleteAccount = async (req, res) => {
  const { id } = req.params;

  // Validate the ID format
  if (!/^[0-9a-fA-F]{24}$/.test(id)) {
    return res.status(400).json({ message: 'Invalid account ID format' });
  }

  try {
    const account = await Account.findByIdAndDelete(id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }

    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

module.exports = {
  addAccount,
  getAccounts,
  deleteAccount
};
