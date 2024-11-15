import './App.css';
import { useState } from "react";
function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const handleAddIncome = () => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount > 0) {
      setIncome(prevIncome => prevIncome + numAmount);
      setBalance(prevBalance => prevBalance + numAmount);
      setText("");
      setAmount(0);
    }
  };
  const handleAddExpense = () => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount) && numAmount > 0) {
      setExpense(prevExpense => prevExpense + numAmount);
      setBalance(prevBalance => prevBalance - numAmount);
      setText("");
      setAmount(0);
    }
  };
  return (
    <section>
      <header>
        <div>
          <h1>Budget Tracker</h1>
        </div>
      </header>
      <div className="app">
        <div className="balances">
          <div>
            <h1>Total Balance</h1>
            <h3>${balance}</h3>
          </div>
          <div className="incomeandexpense">
            <div className="income"> 
              <h4>Income</h4>
              <h5>+${income}</h5>
            </div>
            <div className="expense">
              <h4>Expense</h4>
              <h5>-${expense}</h5>
            </div>
          </div>
        </div>
        <div className='history'>
          <h1>Transaction History</h1>
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
