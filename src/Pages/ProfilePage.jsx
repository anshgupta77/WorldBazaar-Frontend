import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import removeCurrentUser from "../Slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
    const {email, username} = useSelector((state) => state.auth.currentUser);
    console.log(email, username);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () =>{
        localStorage.removeItem("refresh-token");
        localStorage.removeItem("token");
        dispatch(removeCurrentUser);
        navigate("/login");
    }
    return ( 
    <div className=" bg-gray-100 p-5 ">
            {/* Profile Section */}
            <header className="mb-4 flex justify-between items-center">
                <div>
                  <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
                  <p className="text-gray-600">Email: {email}</p>

                </div>
                <button
                    onClick={handleLogout}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </header>

            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[50vw] mx-auto">
                {/* Orders Card */}
                <div className=" rounded-lg shadow-md p-5">
                    <h2 className="text-xl font-semibold ">Your Orders</h2>
                    <p className="text-gray-700 mt-2">Check the status of your recent orders and track them.</p>
                    <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">View Orders</button>
                </div>

                {/* Signup Card */}
                <div className=" rounded-lg shadow-md p-5">
                    <h2 className="text-xl font-semibold ">Signup Details</h2>
                    <p className="text-gray-700 mt-2">Manage your account and update your profile information.</p>
                    <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Update Profile</button>
                </div>

                {/* Products Card */}
                <div className=" rounded-lg shadow-md p-5">
                    <h2 className="text-xl font-semibold ">Products</h2>
                    <p className="text-gray-700 mt-2">Explore new arrivals and best-selling items.</p>
                    <button
                        className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
                        onClick={() => navigate("/product")}
                    >
                        Browse Products
                    </button>
                </div>

                {/* Cart Card */}
                <div className=" rounded-lg shadow-md p-5">
                    <h2 className="text-xl font-semibold t">Your Cart</h2>
                    <p className="text-gray-700 mt-2">You have items waiting in your cart. Don’t forget to checkout!</p>
                    <button
                        className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-600"
                        onClick={() => navigate("/cart")}
                    >
                        Go to Cart
                    </button>
                </div>

                {/* Amazon Description Card */}
                <div className=" rounded-lg shadow-md p-5">
                    <h2 className="text-xl font-semibold ">Amazon Features</h2>
                    <p className="text-gray-700 mt-2">
                        Experience fast delivery, exclusive deals, and customer-centric policies.
                    </p>
                    <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">Learn More</button>
                </div>

                {/* Wishlist Card */}
                <div className=" rounded-lg shadow-md p-5">
                    <h2 className="text-xl font-semibold">Wishlist</h2>
                    <p className="text-gray-700 mt-2">Save your favorite products for later.</p>
                    <button className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">View Wishlist</button>
                </div>
            </div>
        </div>
     );
}
 
export default ProfilePage;