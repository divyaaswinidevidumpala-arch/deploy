import { useState } from "react";

function CheckoutPage() {
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order placed!\nName: ${form.name}\nEmail: ${form.email}\nAddress: ${form.address}`);
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
        <textarea name="address" placeholder="Shipping Address" value={form.address} onChange={handleChange} required />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
export default CheckoutPage;
