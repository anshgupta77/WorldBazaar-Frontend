import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, changeQuantity, toggleItem, totalPrice } from "../Slices/cartSlice";
import { useRetryCall } from "../hook";
function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const subTotal = useSelector(totalPrice);
  const dispatch = useDispatch();

  const [loading1, makeDeleteRequest] = useRetryCall("delete");
  const [loading2, makePatchRequest] = useRetryCall("patch");

  const removeFromCart = (id) => {
    makeDeleteRequest(`http://localhost:4000/user/cart/delete/${id}`)
      .then(response =>{
        console.log(response);
        dispatch(removeItem(id));
      }).catch(err => console.log(err.message));
  };

  const handleUpdateQuantity = (id, increment) => {
    makePatchRequest('http://localhost:4000/user/cart/quantity', {id: id, increment: increment})
    .then(response =>{
      console.log(response);
      dispatch(changeQuantity({id: id, increment: increment}));
    }).catch(err => console.log(err.message));
  };

  const handleToggleSelect = (id) => {
    makePatchRequest('http://localhost:4000/user/cart/toggle', { id: id })
    .then(response =>{
      console.log(response);
      dispatch(toggleItem(id))
    }).catch(err => console.log(err.message));
  };

  return (
    <div className="p-4">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items Section */}
        <div className="flex-1">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 py-10">
            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty!
            </h2>
            <p className="text-gray-600 text-center max-w-md">
              Looks like you haven't added anything to your cart yet. Start exploring and add your favorite items to the cart!
            </p>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md font-semibold"
              onClick={() => window.location.href = "/products"} // Redirect to products page
            >
              Shop Now
            </button>
          </div>
          ) : (
            cart.map((product) => (
              <div
                key={product.id}
                className="flex border-b border-gray-200 py-4 items-center"
              >
                <input
                  type="checkbox"
                  className="mr-4 w-5 h-5 accent-yellow-500"
                  checked={product.selected}
                  onChange={() => handleToggleSelect(product.id)}
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
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleUpdateQuantity(product.id, -1)}
                  >
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-300 rounded"
                    onClick={() => handleUpdateQuantity(product.id, +1)}
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
            ))
          )}
        </div>

        {/* Subtotal Section */}
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
              <strong>Subtotal ({cart.length} item{cart.length !== 1 ? "s" : ""}): </strong>
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
          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded mb-4">
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
    </div>
  );
}

export default CartPage;


