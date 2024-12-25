import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AccountList.css';

function AccountList({ deleteAccount }) {
  const [accounts, setAccounts] = useState([]);

  // Fetch accounts when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/accounts')
      .then(response => {
        setAccounts(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the accounts!", error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/accounts/${id}`)
      .then(() => {
        setAccounts(accounts.filter(account => account._id !== id));
        deleteAccount(id); // Optional callback after deleting
      })
      .catch(error => {
        console.error("Error deleting account!", error);
      });
  };

  return (
    <div className="account-list">
      <h3>Account List</h3>
      {accounts.length === 0 ? (
        <p>No accounts added yet.</p>
      ) : (
        <ul>
          {accounts.map((account) => (
            <li key={account._id}>
              <div className="account-details">
                <span>{account.accountName}</span>
                <span>{account.accountNumber}</span>
                <span>{account.amount}</span>
              </div>
              <button onClick={() => handleDelete(account._id)} className="delete-btn">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AccountList;
