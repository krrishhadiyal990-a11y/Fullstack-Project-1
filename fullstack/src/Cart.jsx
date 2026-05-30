import "./Cart.css";
import { Link } from "react-router-dom";

function Cart({ cart, removeFromCart, updateQty }) {
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
    );

    return (
        <section className="cart">
            <h2>Cart</h2>

            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.img} alt={item.name} />

                        <div>
                            <h3>{item.name}</h3>
                            <p>₹{item.price}</p>

                           
                            <div className="qty-box">
                                <button onClick={() => updateQty(item.id, -1)}>-</button>
                                <span>{item.qty}</span>
                                <button onClick={() => updateQty(item.id, 1)}>+</button>
                            </div>
                        </div>

                        <button onClick={() => removeFromCart(item.id)}>
                            Remove
                        </button>
                    </div>
                ))
            )}

            <h3>Total: ₹{total}</h3>

            <Link to="/checkout">
                <button className="checkout-btn">Go to Checkout</button>
            </Link>
        </section>
    );
}

export default Cart;