import { Link } from "react-router-dom";
import cartImage from "./../../assets/cart.png";
import { useSelector } from "react-redux";
const Cart = () => {
    const cartArray = useSelector(state => state.cart.items);
    console.log(cartArray.length);
    const noOfCartItems = cartArray.length;
    return (
        <div className="flex items-center space-x-1 border border-transparent p-2 hover:border-gray-400 rounded-md transition-all duration-200">
            <div className="text-orange-500 font-bold absolute top-3 right-4">{noOfCartItems}</div>
            
            <img src={cartImage} alt="" className="w-10 h-10" />
        </div>
    );
};

export default Cart;




