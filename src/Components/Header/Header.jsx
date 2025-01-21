// import AmazonLogo from "./Amazonlogo";
// import Delivery from "./Delivery";

// const Header = () => {
//     return ( 
//         <div className="bg-slate-900 h-20 w-full">
//             <AmazonLogo />
//             <Delivery />
//         </div>
//      );
// }
 
// export default Header;


import React from "react";
import AmazonLogo from "./Amazonlogo";
import Delivery from "./Delivery";
import SearchBar from "./Searchbar";
import Language from "./Language";
import AccountList from "./AccountList";
import ReturnOrder from "./ReturnOrder";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-gray-900 text-white flex items-center justify-between h-18 w-full gap-2 px-3 ">
            <Link to="/"> <AmazonLogo /></Link>
            <Delivery />
            <SearchBar />
            <Language />
            <AccountList />
            <ReturnOrder />
            <Link to="/cart"><Cart /></Link>
        </div>
    );
};

export default Header;
