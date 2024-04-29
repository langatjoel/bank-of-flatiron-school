// TransactionTable.js
import React from 'react';

function TransactionTable({ transactions, searchTerm }) {
  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="transaction-table">
      <h2>Transaction Table</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th> {/* Add Date column */}
          </tr>
        </thead>
        <tbody>
          {/* Map over filtered transactions array and render each transaction as a table row */}
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.date}</td> {/* Display date */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
