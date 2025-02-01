import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
