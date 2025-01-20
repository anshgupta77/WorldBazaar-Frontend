import React from "react";
import ProductCard from "./ProductCard";
const productData = [
    {
      id: 1,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: "109.95",
      oldPrice: "137.44", // 20% higher
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    },
    {
      id: 2,
      name: "Mens Casual Premium Slim Fit T-Shirts",
      price: "22.3",
      oldPrice: "27.76", // 20% higher
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, lightweight & soft fabric for breathable and comfortable wearing. And solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    },
    {
      id: 3,
      name: "Mens Cotton Jacket",
      price: "55.99",
      oldPrice: "69.99", // 20% higher
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling, or other outdoors. A good gift choice for you or your family member.",
    },
    {
      id: 4,
      name: "Mens Casual Slim Fit",
      price: "15.99",
      oldPrice: "19.19", // 20% higher
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      description: "The color could be slightly different between on the screen and in practice. Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    },
    {
      id: 5,
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: "695",
      oldPrice: "834.00", // 20% higher
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    },
  ];
  
const ProductList = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-4 mx-2">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    );
  };
  
  export default ProductList;