import { useContext } from "react";
import { StateContext } from "../../App";

const Child3 = () => {
  console.log("Child3");
  const { stateA, setStateA } = useContext(StateContext);

  const updateState = () => {
    const randomValue = Math.ceil(Math.random() * 100);
    setStateA(randomValue);
  };

  console.log("stateA", stateA);
  return (
    <div style={{ backgroundColor: "white", padding: "100px" }}>
      Child3
      <p>
        <b>Value: </b>
        {stateA}
      </p>
      <button onClick={updateState} style={{ backgroundColor: "powderblue", padding: "10px" }}>
        Update
      </button>
    </div>
  );
};

export default Child3;
