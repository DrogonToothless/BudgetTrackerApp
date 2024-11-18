import './App.css';
function ExpenseHistoryItem({ text, amount, type }) {
    return (
      <div className={`expense-item ${type}`}>
        <h3>{text}</h3>
        <p>{type === 'expense' ? `-$${amount}` : `+$${amount}`}</p>
      </div>
    );
}
export default ExpenseHistoryItem;