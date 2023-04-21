import React, { useState } from "react";
import './Main.css'

function Main() {

  const [list, setList] = useState(["Remove this item and enter your items"]);
  const [inputValue, setInputValue] = useState("");
  const [inputMoney, setInputMoney] = useState();
  const [totalSpend,setTotalSpend] = useState(0);

  function handleAdd() {
    if (inputValue && inputMoney) {
      setList([...list, {inputValue,inputMoney}]);
      setInputValue("");
      setInputMoney("");
      const sum = totalSpend+Number(inputMoney);
      setTotalSpend(sum);
    }
  }

  function handleRemove(index) {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  function handleChangeMoney(event) {
    setInputMoney(event.target.value);
  }

  return (
    <div className="main">
        <h1>Enter the finances here-</h1>
        <ul className="data_entered">
            {list.length>0 && list.map((item, index) => (
            <li className="list" key={index}>
                {/* {item.inputValue}{item.inputMoney} */}
                <div className="list-container">
                  <span>{item.inputValue}</span>
                  <span style={{ marginLeft: '800px' }}>{item.inputMoney}</span>
                </div>
                <button id="removing" onClick={() => handleRemove(index)}>-</button>
            </li>
            ))}
        </ul>
        <h1>Total Expenditure- {totalSpend}</h1>
        <div>
            <input className="placetoenter" type="text" value={inputValue} onChange={handleChange} />
            <input className="placetoenter" type="number" value={inputMoney} onChange={handleChangeMoney} />
            <button onClick={handleAdd}>+</button>
        </div>
    </div>
  );
}

export default Main;