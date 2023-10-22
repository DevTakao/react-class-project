/* eslint-disable react/prop-types */
import { RiDeleteBin6Fill } from "react-icons/ri";
import styles from "./StudentCard.module.css";
import { useEffect } from "react";

const StudentCard = ({
  onDelete = () => {},
  data = {
    name: "NoParent",
    age: 0,
  },
}) => {
  console.log("StudentCard:", onDelete, data);

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log("hello");
    }, 1000);

    // cleanup function
    return () => {
      console.log("StudentCard useEffect return");
      clearInterval(myInterval);
    };
  }, []);

  return (
    <li>
      <button onClick={onDelete}>
        <RiDeleteBin6Fill />
      </button>
      <p className={styles.studentName}>{data.name}</p>
      <p className={styles.studentAge}>Age: {data.age}</p>
    </li>
  );
};

export default StudentCard;
