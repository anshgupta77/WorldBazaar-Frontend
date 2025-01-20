import React, { useState } from "react";
import { productData } from "../Components/Data/ProductData"; 
import { useSelector, useDispatch } from "react-redux";
import { removeItem, changeQuantity, toggleItem, totalPrice } from "../Slices/cartSlice";
import { usePatchCall, useDeleteCall } from "./../hook";
function CartPage() {
  // const [cart, setCart] = useState(productData.slice(0, 5)); 

  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  const makePatchRequest = usePatchCall();
  const makeDeleteRequest = useDeleteCall();


  const subTotal = useSelector(totalPrice);

  

  const removeFromCart = (id) => {
      makeDeleteRequest(`http://localhost:4000/cart/delete/${id}`);
  };

  const handleUpdateQuantity = (id, increament) => {
    makePatchRequest('http://localhost:4000/cart/quantity', {id: id, increament: increament});
  }
  const handleToggleSelect = (id) => {
    makePatchRequest('http://localhost:4000/cart/toggle', { id: id });
  }

  console.log(cart);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex border-b border-gray-200 py-4 items-center"

              >
                <input
                  type="checkbox"
                  className="mr-4 w-5 h-5 accent-yellow-500"
                  checked = {product.selected} onChange={()=>handleToggleSelect(product.id)}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 object-cover rounded"
                />
                <div className="flex-grow px-4 text-left">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-lg font-semibold mt-2">
                  ₹{product.price}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="px-2 py-1 bg-gray-300 rounded" onClick={()=>handleUpdateQuantity(product.id, -1)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded" onClick={()=>handleUpdateQuantity(product.id, +1)}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-1/3 bg-gray-100 shadow-md p-4 rounded-lg">
          <div className="flex justify-around">
            <h2 className="text-xl font mb-4">Subtotal</h2>
            <h2 className="text-xl font-extrabold mb-4 text-black">₹{subTotal}</h2> 

          </div>
            <button className="bg-yellow-500 text-black font-bold w-full py-2 rounded mt-4 hover:bg-yellow-600">
              Proceed to Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;