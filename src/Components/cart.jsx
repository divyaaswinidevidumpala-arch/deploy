function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Shopping Bag</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="details">
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}
export default Cart;
