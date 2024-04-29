// App.js
import React, { useState } from 'react';

import './App.css';
import TransactionTable from './TransactionTable';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';


function App() {
  // Define state to hold transactions
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Coffee', amount: 5.99, category: 'Food', date: '2024-04-27' },
    { id: 2, description: 'Movie tickets', amount: 20.5, category: 'Entertainment', date: '2024-04-27' },
    { id: 3, description: 'Gas', amount: 30.25, category: 'Travel', date: '2024-04-27' },
    { id: 4, description: 'Books', amount: 15.75, category: 'Shopping', date: '2024-04-27' },
  ]);
  

  // Define state for search term
  const [searchTerm, setSearchTerm] = useState('');

  // Define function to add new transaction
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1 }]);
  };

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Welcome to the Bank of Flatiron!
        </p>
        

        {/* Render TransactionForm component */}
        <TransactionForm addTransaction={addTransaction} />
        {/* Render SearchBar component */}
        <SearchBar setSearchTerm={setSearchTerm} />
        {/* Render TransactionTable component and pass transactions and searchTerm as props */}
        <TransactionTable transactions={transactions} searchTerm={searchTerm} />
      </header>
    </div>
  );
}

export default App;
