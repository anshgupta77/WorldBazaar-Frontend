import React from "react";
import { useState } from "react";
import SideMenu from "./SideMenu";
import menu from "./../assets/menu.png"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-gray-700 text-white px-2 py-2 text-sm flex space-x-2">
        <span
          className="flex gap-2 material-icons text-white  cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200"
          onClick={toggleMenu}
        >
         <img src={menu} className="w-5 h-6"/>
        <span className="cursor-pointer">All</span>
        </span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Fresh</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">MX Player</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Sell</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Best Sellers</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Mobiles</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Today's Deals</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Prime</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Customer Service</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Electronics</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Home & Kitchen</span>
        <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">Amazon Pay</span>
      </div>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </> 
  );
};

export default Navbar;