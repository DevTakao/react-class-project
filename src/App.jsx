import "./App.css";
import ParentComponent from "./components/context-api/ParentComponent";
// import ToDoApp from "./components/home/ToDoApp";
// import ShoppingApp from "./components/shopping/ShoppingApp";
// import Counter from "./common/Counter";
// import Header from "./common/Header";

function App() {
  console.log("App called");
  return (
    <div>
      {/* <Header /> */}
      {/* <Counter /> */}
      {/* <ToDoApp /> */}
      {/* <ShoppingApp /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
