import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <h2>🛒 MyStore</h2>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        <Link to="/checkout">Checkout</Link>
      </div>
    </nav>
  );
}

export default Navbar;
