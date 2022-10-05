import { useState } from "react";
import "./App.css";
const App = () => {
  const [list, setList] = useState([]);
  const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState("");
  const [date, setDate] = useState("");
  const [key,setKey] = useState(1);
  const handleExpense = (e) => {
    //  console.log(e.target.value);
    setExpense(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleButton = () => {
    //console.log(list);
    if (
      expense.trim().length !== 0 &&
      amount.trim().length !== 0 &&
      date.trim().length !== 0
    ) {
      setList([
        ...list,
        { 
          key: key,
          expense: expense,
          amount: amount,
          date: date,
        },
      ]);
      setKey(key+1);
      setAmount("");
      setDate("");
      setExpense("");
    } else {
      alert("Fields cannot be empty");
    }
    //list.sort();
    
    console.log(list);
  };
  const handleDelete = (item) => {
    setList(list.filter((ele) => ele !== item));
  };
  return (
    <div className="App">
      <div className="Title">Expense Manager</div>
      <div className="AddExpense">
        <div className="Ankit">AddExpense</div>
        <input
          className="Input"
          onChange={handleExpense}
          value={expense}
        ></input>
        <input
          className="Input"
          type="number"
          onChange={handleAmount}
          value={amount}
        ></input>
        <input
          className="Input"
          type="date"
          onChange={handleDate}
          value={date}
        ></input>
        <button className="Button" onClick={handleButton}>
          Add Expense
        </button>
      </div>
      <div className="ExpenseList">
        {list.length > 0 &&
          list.map((ele) => (
            <div className="Item" key={ele.key}>
              <li>{ele.expense}</li>
              <li>{ele.amount}</li>
              <li>{ele.date}</li>
              <button className="Button" onClick={()=>handleDelete(ele)}>
          Delete Expense
        </button>
            </div>
          ))}
      </div>
    </div>
  );
};
export default App;
