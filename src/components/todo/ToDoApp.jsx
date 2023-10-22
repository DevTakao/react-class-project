/* eslint-disable no-unused-vars */
import { AiFillPlusCircle } from "react-icons/ai";
import { RiDeleteBin6Fill } from "react-icons/ri";
import styles from "./ToDoApp.module.css";
import { useState, useEffect } from "react";
import StudentCard from "./StudentCard";

// Step 1: draw a placeholder UI in return()
// Step 2: Think about states in this component

const ToDoApp = () => {
  console.log("ToDoApp re-rendered");
  //   const [count, setCount] = useState(0);
  const [list, setList] = useState([
    {
      name: "John",
      age: 10,
    },
  ]);

  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState(18);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleNameInput = (e) => {
    // console.log(e.target.value);
    setStudentName(e.target.value);
  };

  const handleAgeInput = (e) => {
    // console.log(e.target.value);
    setStudentAge(e.target.value);
  };

  const handleClick = () => {
    // console.log("clicked");
    setList((prev) => [
      ...prev,
      {
        name: studentName,
        age: studentAge,
      },
    ]);
  };

  const handleDelete = (index) => {
    // console.log("Delete clicked", index);
    setList((prev) => {
      let currentState = [...prev];
      console.log("currentState", currentState);

      currentState.splice(index, 1);
      console.log("currentState", currentState);

      return currentState;
    });
  };

  useEffect(() => {
    if (studentName.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [studentName]);

  return (
    <div className={styles.container}>
      <div className={styles.buttonWrapper}>
        <label htmlFor="studentName">Name:</label>
        <input
          name="studentName"
          value={studentName}
          onChange={handleNameInput}
          type="text"
          className={styles.inputBox}
        />
        <label htmlFor="studentAge">Age:</label>
        <input
          name="studentAge"
          value={studentAge}
          onChange={handleAgeInput}
          type="number"
          className={styles.inputBox}
        />
        <button disabled={isDisabled} onClick={handleClick} className={styles.addButton}>
          <AiFillPlusCircle size={25} />
        </button>
      </div>
      <span className={styles.counter}>{list.length} tasks</span>
      <ul className={styles.listWrapper}>
        {list.map((data, i) => (
          <StudentCard key={i} onDelete={() => handleDelete(i)} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoApp;
