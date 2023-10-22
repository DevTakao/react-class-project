import { useRef } from "react";

const RefDom = () => {
  const inputRef = useRef(null);
  console.log("initial ref", inputRef);

  const handleClick = () => {
    if (inputRef.current) {
      console.log("inputRef", inputRef);
      inputRef.current.style.color = "blue";
    }
  };

  return (
    <div>
      <h1 onClick={handleClick}>Click Me To Focus Input</h1>
      <input type="text" placeholder="please focus me" style={{ padding: "50px", fontSize: "3rem" }} ref={inputRef} />
    </div>
  );
};

export default RefDom;
