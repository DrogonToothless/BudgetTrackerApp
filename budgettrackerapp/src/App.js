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
      <TotalBalance />
      <TransactionHistory />
      <AddTransaction />
    </section>
  );
}

export default App;
