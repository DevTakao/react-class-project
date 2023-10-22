import Child1 from "./Child1";

const ParentComponent = () => {
  console.log("ParentComponent");

  return (
    <div>
      <Child1 />
    </div>
  );
};

export default ParentComponent;
