import React, { useState } from "react";
import { productData } from "../Components/Data/ProductData"; 
import { useSelector, useDispatch } from "react-redux";
import { removeItem, changeQuantity, toggleItem, totalPrice } from "../Slices/cartSlice";
import { usePatchCall, useDeleteCall } from "./../hook";
function CartPage() {
  // const [cart, setCart] = useState(productData.slice(0, 5)); 

  const cart = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();
  // const makePatchRequest = usePatchCall();
  // const makeDeleteRequest = useDeleteCall();


  const subTotal = useSelector(totalPrice);

  

  const removeFromCart = (id) => {
      dispatch(removeItem(id))
      // makeDeleteRequest(`http://localhost:4000/cart/delete/${id}`);
  };

  const handleUpdateQuantity = (id, increament) => {
    dispatch(changeQuantity({id: id, increament: increament}))
    // makePatchRequest('http://localhost:4000/cart/quantity', {id: id, increament: increament});
  }
  const handleToggleSelect = (id) => {
    dispatch(toggleItem(id))
    // makePatchRequest('http://localhost:4000/cart/toggle', { id: id });
  }

  console.log(cart);
  return (
    <div className="p-4">
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
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <div className="flex items-center mt-2">
                  <span className="text-yellow-400 text-sm font-bold">
                    {product.rating.rate}⭐
                  </span>
                  <span className="text-gray-600 text-sm ml-2">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <div className="mt-2 text-left">
                  <span className="text-xl font-bold text-gray-800">
                    ₹{product.price}
                  </span>
                  {product.oldPrice && (
                <span className="text-sm text-red-500 ml-2 line-through">
                  ₹{product.oldPrice}
                </span>
              )}
              </div>
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

          {/* <div className="w-full lg:w-1/3 bg-gray-100 shadow-md p-4 rounded-lg">
          <div className="flex justify-around">
            <h2 className="text-xl font mb-4">Subtotal</h2>
            <h2 className="text-xl font-extrabold mb-4 text-black">₹{subTotal}</h2> 

          </div>
            <button className="bg-yellow-500 text-black font-bold w-full py-2 rounded mt-4 hover:bg-yellow-600">
              Proceed to Buy
            </button>
          </div> */}

<div className="p-4 border rounded shadow-md bg-white">
      {/* Free Delivery Info */}
      <div className="flex items-center bg-green-50 p-3 rounded mb-4">
        <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center text-white mr-2">
          ✓
        </div>
        <div>
          <h2 className="text-green-700 font-semibold text-sm">
            Your order is eligible for FREE Delivery.
          </h2>
          <p className="text-gray-600 text-xs">
            Choose <strong>FREE Delivery</strong> option at checkout.
          </p>
        </div>
      </div>

      {/* Subtotal Section */}
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>Subtotal ({1} item): </strong>
          <span className="font-semibold">₹{subTotal.toFixed(2)}</span>
        </p>
        <div className="flex items-center mt-2">
          <input type="checkbox" id="giftOption" className="mr-2" />
          <label htmlFor="giftOption" className="text-sm text-gray-600">
            This order contains a gift
          </label>
        </div>
      </div>

      {/* Proceed to Checkout Button */}
      <button

        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded mb-4"
      >
        Proceed to Buy
      </button>

      {/* EMI Section */}
      <div className="text-sm text-gray-600 border-t pt-2">
        <button className="flex items-center justify-between w-full text-gray-700">
          <span>EMI Available</span>
          <span className="text-lg font-semibold">⌄</span>
        </button>
      </div>
    </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;





