import { useState } from "react";
function TotalBalance() {
    const [balance, setBalance] = useState("0");
    const [income, setIncome] = useState("0");
    const [expense, setExpense] = useState("0");
    return (
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
    );
}
export default TotalBalance;