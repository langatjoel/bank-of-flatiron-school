// TransactionForm.js
import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(''); // Add state for date

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      description,
      amount,
      category,
      date, // Include date in the new transaction object
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setCategory('');
    setDate('');
  };

  return (
    <div className="transaction-form">
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        {/* Date input field */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
