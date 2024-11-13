import './App.css';
import TotalBalance from './components/totalbalance';
import TransactionHistory from './components/transactionhistory';
import AddTransaction from './components/addtransaction';
function App() {
  return (
    <section>
      <header>
        <div>
          <h1>Budget Tracker</h1>
        </div>
      </header>
      <div className="app">
        <TotalBalance />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </section>
  );
}

export default App;
