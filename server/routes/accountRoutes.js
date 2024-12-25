const express = require('express');
const { addAccount, getAccounts, deleteAccount } = require('../controllers/accountController');

const router = express.Router();

// Add account route
router.post('/', addAccount);

// Get all accounts route
router.get('/', getAccounts);

// Delete account route
router.delete('/:id', deleteAccount);

module.exports = router;
