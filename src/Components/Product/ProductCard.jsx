import React, { useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "./../../Slices/cartSlice"
;
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  // const items = useSelector((state) => state.cart.items);
  // const [id, setId] = useState(null);
  console.log(product);
  function addItemToCart(product, id){
    // setId(id);
    dispatch(addItem(product));
  }


  return (
        <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-md">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              className="rounded-t-lg h-52 object-cover"
              src={product.image}
              alt={product.title}
            />
          </div>
    
          {/* Content Section */}
          <div className="p-4">
            {/* Product Title */}
            <h3 className="font-semibold text-lg text-gray-800 truncate">
              {product.title}
            </h3>

            <p className="text-sm text-gray-600 mt-2 line-clamp-3 text-left">
                {product.description}
              </p>

            <div className="flex items-center mt-2">
              <span className="text-yellow-400 text-sm font-bold">
                {product.rating.rate}⭐
              </span>
              <span className="text-gray-600 text-sm ml-2">
                ({product.rating.count} reviews)
              </span>
            </div>
    
            {/* Product Price */}
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
    
            {/* Rating */}
            
    
            {/* Add to Cart Button */}
            <div className="mt-3">
              {/* <button
                onClick={() => addItemToCart(product, product.id)}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
              >
                {id === product.id ? (
                  <span className="text-sm text-white">Go to Cart</span>
                ) : (
                  <span className="text-sm text-white">Add to Cart</span>
                )}
              </button> */}

                {product.addToCart ? (
                  <Link to="/cart"><button
                  className="w-full bg-yellow-400 text-white py-2 rounded-md hover:bg-yellow-500">  <span className="text-sm text-white">Go to Cart</span></button></Link>
                  
                  
                ) : (
                  <button onClick={() => addItemToCart(product, product.id)}
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"><span className="text-sm text-white">Add to Cart</span></button>
                  
                )}
      

              
            </div>
          </div>
        </div>
    
    

    
  );
};

export default ProductCard;