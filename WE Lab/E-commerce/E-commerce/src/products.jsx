const productList = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Headphones", price: 150 },
  { name: "Keyboard", price: 100 },
  { name: "Mouse", price: 50 },
];

export default function Products({ cart, setCart }) {
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="flex flex-wrap gap-6">
        {productList.map((product, i) => (
          <div
            key={i}
            className="w-64 border border-gray-300 rounded-lg bg-white p-4 flex flex-col"
          >
            <h2 className="text-lg font-bold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-3">
              <span className="font-semibold">Price:</span> ${product.price}
            </p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 mt-auto"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}