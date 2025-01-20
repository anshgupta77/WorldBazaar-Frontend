import CategoryFilter from "../Components/Product/CategoryFilter";
import ProductList from "../Components/Product/ProductList";
import ProductNavbar from "../Components/Product/ProductNavbar";

const ProductPage = () => {
    return ( 
        <div>
            <CategoryFilter />
            <ProductNavbar />
            <ProductList />
        </div>
     );
}
 
export default ProductPage;