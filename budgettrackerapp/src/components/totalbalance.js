import { useState } from "react";
function TotalBalance() {
    function yourBalance() {
        const [balance, setBalance] = useState("0");
    }
    return (
        <div>
            <h1>Total Balance</h1>
            <h3>{balance}</h3>
        </div>
    );
}
export default TotalBalance;