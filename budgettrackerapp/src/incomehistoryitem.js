import './App.css';
function IncomeHistoryItem({ text, amount, type }) {
    return (
      <div className={`expense-item ${type}-item`}>
        <h3>{text}</h3>
        <p>{type === 'income' ? `${amount}` : `${amount}`}</p>
      </div>
    );
}
export default IncomeHistoryItem;