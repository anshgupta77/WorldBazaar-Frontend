import { useEffect } from "react";
import CategoryFilter from "../Components/Product/CategoryFilter";
import ProductList from "../Components/Product/ProductList";
import ProductNavbar from "../Components/Product/ProductNavbar";

import { useDispatch } from "react-redux";
import { setProductItems } from "../Slices/productSlice";
import { useNavigate } from "react-router-dom";
import { useRetryCall } from "../hook";
const ProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, productFetch] = useRetryCall("get");
    useEffect(() =>{
        productFetch("http://localhost:4000/product")
        .then(response =>{
          const items = response?.data?.products || [];
          console.log(items);
          dispatch(setProductItems(items));
          console.log("success");
        }).catch(err =>{
            console.log(err.message);
            navigate("/login");
        });
    },[])
    return ( 
        <div>
            {/* <CategoryFilter /> */}
            <ProductNavbar />
            <ProductList />
        </div>
     );
}
 
export default ProductPage;