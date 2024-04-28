import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';

function App() {
  // Define state to hold transactions
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Coffee', amount: 5.99, category: 'Food' },
    { id: 2, description: 'Movie tickets', amount: 20.5, category: 'Entertainment' },
    { id: 3, description: 'Gas', amount: 30.25, category: 'Travel' },
    { id: 4, description: 'Books', amount: 15.75, category: 'Shopping' },
  ]);

  // Define function to add new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the Bank of Flatiron!
        </p>
        {/* Render TransactionForm component */}
        <TransactionForm addTransaction={addTransaction} />
        {/* Render SearchBar component */}
        <SearchBar />
        {/* Render TransactionTable component and pass transactions as props */}
        <TransactionTable transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
