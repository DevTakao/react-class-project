import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ParentComponent from "./components/context-api/ParentComponent";
import ToDoApp from "./components/todo/ToDoApp";
import ShoppingApp from "./components/shopping/ShoppingApp";
import Counter from "./components/counter/Counter";
import HomePage from "./components/home/HomePage";
import Header from "./common/Header";
import Navbar from "./common/Navbar";
import { createContext, useState } from "react";
import RefDom from "./components/ref-dom/RefDom";

export const StateContext = createContext({
  stateA: 0,
  setStateA: () => {},
});

function App() {
  const [stateA, setStateA] = useState(0);

  console.log("App called");

  return (
    <StateContext.Provider value={{ setStateA, stateA }}>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/todo" element={<ToDoApp />} />
          <Route path="/shop" element={<ShoppingApp />} />
          <Route path="/contextapi" element={<ParentComponent />} />
          <Route path="/refdom" element={<RefDom />} />
        </Routes>
      </BrowserRouter>
    </StateContext.Provider>
  );
}

export default App;
