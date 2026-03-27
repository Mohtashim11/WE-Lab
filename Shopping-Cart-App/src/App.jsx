import { useState } from "react";
import "./App.css"
function App() {
  
  const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 200 }  
];

const [cart, setCart] = useState([]);

const addToCart = (product) => {
  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    setCart(cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

const increaseQty = (id) => {
  setCart(cart.map(item =>
    item.id === id
      ? { ...item, quantity: item.quantity + 1 }
      : item
  ));
};

const decreaseQty = (id) => {
  setCart(cart.map(item =>
    item.id === id && item.quantity > 1
      ? { ...item, quantity: item.quantity - 1 }
      : item
  ));
};

const removeItem = (id) => {
  setCart(cart.filter(item => item.id !== id));
};

const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

  return (
  <div>
    <h2>Products</h2>

    {products.map(product => (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    ))}
    <h3>Cart</h3>
<div className="cart-container">
{cart.map(item => (
  <div key={item.id}>
    <h3>{item.name}</h3>
    <p>Price: ${item.price}</p>
   <button onClick={() => decreaseQty(item.id)}>-</button>
   <span>{item.quantity}</span>
   <button onClick={() => increaseQty(item.id)}>+</button>
   <button onClick={() => removeItem(item.id)}>Remove</button>
  </div>
))}
  </div>
<h4>Total: ${total}</h4>
</div>
  
);
}


export default App;