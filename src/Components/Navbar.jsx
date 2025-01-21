import React from "react";
import { useState } from "react";
import SideMenu from "./SideMenu";
import menu from "./../assets/menu.png"
import user from "../assets/userprofile.jpeg"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="bg-gray-700 text-white px-2 py-2 text-sm flex justify-between">
        <div className="flex items-center space-x-2">

        <span
          className="flex gap-2 material-icons text-white  cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200"
          onClick={toggleMenu}
        >
         <img src={menu} className="w-5 h-5"/>
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
        <img src={user} alt="" className="w-6 h-6 object-cover rounded-full mx-2 cursor-pointer" onClick={() =>{navigate("/profile")}}/>
      </div>
      <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </> 
  );
};

export default Navbar;

// import React, { useState } from "react";
// import SideMenu from "./SideMenu";
// import menu from "./../assets/menu.png";
// import user from "../assets/userprofile.jpeg";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       <div className="bg-gray-700 text-white px-2 py-2 text-sm flex items-center justify-between">
//         {/* Left Side - Menu and Links */}
//         <div className="flex items-center space-x-2">
//           <span
//             className="flex gap-2 material-icons text-white cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200"
//             onClick={toggleMenu}
//           >
//             <img src={menu} className="w-5 h-6" />
//             <span className="cursor-pointer">All</span>
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Fresh
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             MX Player
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Sell
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Best Sellers
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Mobiles
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Today's Deals
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Prime
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Customer Service
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Electronics
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Home & Kitchen
//           </span>
//           <span className="cursor-pointer border border-transparent hover:border-gray-400 px-1 transition-all duration-200">
//             Amazon Pay
//           </span>
//         </div>

//         {/* Right Side - User Profile Icon */}
//         <div>
//           <img
//             src={user}
//             alt="User Profile"
//             className="w-6 h-6 object-cover rounded-full cursor-pointer mx-2"
//           />
//         </div>
//       </div>
//       <SideMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
//     </>
//   );
// };

// export default Navbar;
