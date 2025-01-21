import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// 
  
const ProductList = () => {
    const productData = useSelector(state => state.product.items);
    console.log(productData);

    useEffect(() => {
      
      window.scrollTo(0, 0);
  }, []);
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-2">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    );
  };
  
  export default ProductList;