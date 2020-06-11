import React from 'react';
import { Head } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/Income_Expense';
import { TransactionsList } from './components/TransactionsList';
import { AddTransactions } from './components/AddTransactions';
import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Head />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionsList />
          <AddTransactions />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
