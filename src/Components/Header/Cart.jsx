import { Link } from "react-router-dom";
import cart from "./../../assets/cart.png";
const Cart = () => {
    return (
        <div className="flex items-center space-x-1 border border-transparent p-2 hover:border-gray-400 rounded-md transition-all duration-200">
            <img src={cart} alt="" className="w-10 h-10" />
        </div>
    );
};

export default Cart;




