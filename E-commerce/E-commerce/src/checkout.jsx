import { useState } from "react";

export default function Checkout({ cart }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // Calculate total
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Calculate delivery estimate
  let deliveryTime = "";
  if (total > 0 && total <= 200) deliveryTime = "1-2 business days";
  else if (total <= 500) deliveryTime = "3-4 business days";
  else if (total <= 1000) deliveryTime = "5-6 business days";
  else if (total > 1000) deliveryTime = "7 business days";

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Order placed!\nName: ${name}\nAddress: ${address}\nTotal: $${total}\nEstimated Delivery: ${deliveryTime}`
    );
    setName("");
    setAddress("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gray-100 pt-10">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        {/* Form Column */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-1/2 bg-white p-6 rounded shadow space-y-3"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
          >
            Place Order
          </button>
        </form>

        {/* Summary Column */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded shadow flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-700">Your cart is empty.</p>
          ) : (
            <div className="flex flex-col gap-2">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </div>
              ))}
              <hr className="my-2" />
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>${total}</span>
              </div>
              <div className="mt-2 text-gray-700">
                <span className="font-semibold">Estimated Delivery:</span>{" "}
                {deliveryTime || "N/A"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}