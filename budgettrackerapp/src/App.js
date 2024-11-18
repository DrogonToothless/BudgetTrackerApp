import './App.css';
import { useState } from 'react';
import IncomeHistoryItem from './incomehistoryitem';
import ExpenseHistoryItem from './expensehistoryitem';
function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [transactions, setTransactions] = useState([]);

  const handleAddIncome = () => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount > 0) {
      setIncome((prevIncome) => prevIncome + numAmount);
      setBalance((prevBalance) => prevBalance + numAmount);
      setTransactions((prev) => [
        ...prev,
        { id: Date.now(), text, amount: numAmount, type: 'income' }, // Add income item
      ]);
      resetInputs();
    }
  };

  const handleAddExpense = () => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount > 0) {
      setExpense((prevExpense) => prevExpense + numAmount);
      setBalance((prevBalance) => prevBalance - numAmount);
      setTransactions((prev) => [
        ...prev,
        { id: Date.now(), text, amount: numAmount, type: 'expense' }, // Add expense item
      ]);
      resetInputs();
    }
  };

  const resetInputs = () => {
    setText('');
    setAmount('');
  };

  return (
    <section>
      <header>
        <h1>Budget Tracker</h1>
      </header>
      <div className="app">
        <div className="balances">
          <div>
            <h1>Total Balance</h1>
            <h3>${balance.toFixed(2)}</h3>
          </div>
          <div className="incomeandexpense">
            <div className="total-income">
              <h4>Income</h4>
              <h5>+${income.toFixed(2)}</h5>
            </div>
            <div className="total-expense">
              <h4>Expense</h4>
              <h5>-${expense.toFixed(2)}</h5>
            </div>
          </div>
        </div>
        <div id="history">
          <h1>Transaction History</h1>
          {transactions.map((transaction) => (
            <ExpenseHistoryItem
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              type={transaction.type}
            />
          ))}
        </div>
        <div className="addtransaction">
          <h1>Add Transaction</h1>
          <h4>Text</h4>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
          <h4>Amount</h4>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0"
          />
          <button onClick={handleAddIncome}>Add Income</button>
          <button onClick={handleAddExpense}>Add Expense</button>
        </div>
      </div>
    </section>
  );
}

export default App;
