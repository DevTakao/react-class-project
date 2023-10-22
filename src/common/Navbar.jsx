import { Link } from "react-router-dom";

const Navbar = () => {
  console.log("Navbar called");
  return (
    <div style={{ border: "1px solid black" }}>
      <ul>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/todo">Todo App</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contextapi">Context Example</Link>
        </li>
        <li>
          <Link to="/refdom">DOM Manipulation With Ref</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
