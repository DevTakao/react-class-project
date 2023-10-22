import Child2 from "./Child2";

const Child1 = () => {
  console.log("Child1");
  return (
    <div>
      <Child2 />
    </div>
  );
};

export default Child1;
