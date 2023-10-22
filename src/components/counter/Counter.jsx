import { useState } from "react";

const Counter = () => {
  console.log("Counter component re-rendered!");
  const [count, setCount] = useState(1000);
  // useState hook is a function, returns a value, setter function to update that value

  const decreaseRandom = () => {
    console.log("decreaseRandom called");

    const randomVal = Math.floor(Math.random() * 11);

    setCount(count - randomVal);
  };

  const isEven = () => {
    return count % 2 === 0;
  };

  return (
    <div>
      <div>Count: {count}</div>
      {isEven() && <p>The count is even.</p>}
      <button onClick={decreaseRandom} style={{ padding: "7px 12px", backgroundColor: "red" }}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
