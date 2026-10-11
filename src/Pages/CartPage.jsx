import { useContext } from "react";
import Cart from "../Components/Cart";
import { CartContext } from "../Context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default CartPage;
