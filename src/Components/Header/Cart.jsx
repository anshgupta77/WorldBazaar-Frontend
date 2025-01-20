import { Link } from "react-router-dom";
import cart from "./../../assets/cart.png";
const Cart = () => {
    return (
        <div className="flex items-center space-x-1">
            <img src={cart} alt="" className="w-10 h-10" />
        </div>
    );
};

export default Cart;




