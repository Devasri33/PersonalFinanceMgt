import React, { useState } from 'react';
import axios from 'axios';
import './AddAccountModal.css';

function AddAccountModal({ addAccount, closeModal }) {
  const [accountName, setAccountName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (accountName.trim() && accountNumber.trim() && amount.trim()) {
      const newAccount = { accountName, accountNumber, amount };
      axios.post('http://localhost:5000/api/accounts', newAccount)
        .then(response => {
          addAccount(response.data.account);
          closeModal();
        })
        .catch(error => {
          alert('Error adding account!');
        });
    } else {
      alert('All fields are required!');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Account</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Account Name"
            value={accountName}
            onChange={(e) => setAccountName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Account Number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit">Add</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddAccountModal;
