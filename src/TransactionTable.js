// TransactionTable.js
import React from 'react';

function TransactionTable({ transactions }) {
  return (
    <div>
      <h2>Transaction Table</h2>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over transactions array and render each transaction as a table row */}
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
