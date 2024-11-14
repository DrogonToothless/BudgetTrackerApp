import './App.css';
import { useState } from "react";
function App() {
  const [balance, setBalance] = useState("0");
  const [income, setIncome] = useState("0");
  const [expense, setExpense] = useState("0");
  const text = document.getElementById("text");
  const textValue = text.value;
  const number = document.getElementById("number");
  const numberValue = number.value;
  return (
    <section>
      <header>
        <div>
          <h1>Budget Tracker</h1>
        </div>
      </header>
      <div className="app">
        <div>
          <div>
            <h1>Total Balance</h1>
            <h3>{balance}</h3>
          </div>
          <div className="incomeandexpense">
            <div className="income"> 
              <h4>Income</h4>
              <h5>+${income}</h5>
            </div>
            <div className="expense">
              <h4>Expense</h4>
              <h5>+${expense}</h5>
            </div>
          </div>
        </div>
        <h1>Transaction History</h1>
        <div className='addtransaction'>
          <h1>Add Transaction</h1>
          <h4>Text</h4>
          <input type="text" id="text" placeholder="Enter text..."></input>
          <h4>Amount</h4>
          <input type="number" id="amount" placeholder="0"></input>
          <button onClick={() => setIncome(income + numberValue)}>Add Income</button>
          <button onClick={() => setExpense(expense + numberValue)}>Add Expense</button>
        </div>
      </div>
    </section>
  );
}
export default App;
