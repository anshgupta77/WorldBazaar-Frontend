import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";
import Main from "../Components/Main";
const Product = () => {
    return ( 
        <Link to="/">
            <div>
                <Carousel />
                <Main /> 
            </div>
        </Link>
        
     );
}
 
export default Product;