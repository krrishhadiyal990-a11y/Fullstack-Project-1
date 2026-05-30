function Checkout({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="checkout">
      <h2>Checkout</h2>

      {cart.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} x {item.qty} = ₹{item.price * item.qty}
          </p>
        </div>
      ))}

      <hr />

      <h3>Total: ₹{total}</h3>

      <input placeholder="Enter Address" />
      <input placeholder="Phone Number" />

      <button className="checkout-btn">
        Place Order
      </button>
    </div>
  );
}

export default Checkout;