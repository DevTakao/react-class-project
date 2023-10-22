import { createContext, useState } from "react";
import Child1 from "./Child1";

export const StateContext = createContext({
  stateA: 0,
  setStateA: () => {},
});

const ParentComponent = () => {
  const [stateA, setStateA] = useState(0);

  console.log("stateA", stateA);
  console.log("ParentComponent");

  return (
    <div>
      <StateContext.Provider
        value={{
          stateA,
          setStateA,
        }}
      >
        <Child1 />
      </StateContext.Provider>
    </div>
  );
};

export default ParentComponent;
