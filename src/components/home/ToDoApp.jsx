import { AiFillPlusCircle } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import styles from "./ToDoApp.module.css";
import { useState } from "react";

// Step 1: draw a placeholder UI in return()
// Step 2: Think about states in this component

const ToDoApp = () => {
  console.log("ToDoApp re-rendered");
  //   const [count, setCount] = useState(0);
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const userInputFunc = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim().length !== 0) {
      console.log("clicked");
      setList((prev) => [...prev, inputValue]);
    }
  };

  const handleDelete = (index) => {
    console.log("Delete clicked", index);
    setList((prev) => {
      let currentState = [...prev];
      console.log("currentState", currentState);

      currentState.splice(index, 1);
      console.log("currentState", currentState);

      return currentState;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <input value={inputValue} onChange={userInputFunc} type="text" className={styles.inputBox} />
        <button onClick={handleClick} className={styles.addButton}>
          <AiFillPlusCircle size={25} color="#5770D9" />
        </button>
      </div>
      <span className={styles.counter}>{list.length} tasks</span>
      <ul className={styles.listWrapper}>
        {console.log("list", list)}
        {list.map((item, i) => (
          <li key={i}>
            <button onClick={() => handleDelete(i)}>
              <RiDeleteBin6Fill />
            </button>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
