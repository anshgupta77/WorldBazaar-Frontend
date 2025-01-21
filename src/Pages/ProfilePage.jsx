import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import removeCurrentUser from "../Slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const ProfilePage = () => {
    const {email} = useSelector((state) => state.auth.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () =>{
        dispatch(removeCurrentUser);
        navigate("/login");
    }
    return ( 
        <div className="min-h-screen bg-gray-100 p-5">
      {/* Header Section */}
      <header className="bg-white shadow-md rounded-lg p-6 mb-6">
        {/* <h1 className="text-2xl font-bold">Welcome, {name}!</h1> */}
        <p className="text-gray-600">Email: {email}</p>
      </header>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Orders Card */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-semibold">Your Orders</h2>
          <p className="text-gray-500 mt-2">Check the status of your recent orders and track them.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Orders</button>
        </div>

        {/* Signup Card */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-semibold">Signup Details</h2>
          <p className="text-gray-500 mt-2">Manage your account and update your profile information.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Update Profile</button>
        </div>

        {/* Products Card */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-semibold">Products</h2>
          <p className="text-gray-500 mt-2">Explore new arrivals and best-selling items.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Browse Products</button>
        </div>

        {/* Cart Card */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-semibold">Your Cart</h2>
          <p className="text-gray-500 mt-2">You have items waiting in your cart. Don’t forget to checkout!</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Go to Cart</button>
        </div>

        {/* Amazon Description Card */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-semibold">Amazon Features</h2>
          <p className="text-gray-500 mt-2">
            Experience fast delivery, exclusive deals, and customer-centric policies.
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
        </div>

        {/* Wishlist Card */}
        <div className="bg-white rounded-lg shadow-md p-5">
          <h2 className="text-xl font-semibold">Wishlist</h2>
          <p className="text-gray-500 mt-2">Save your favorite products for later.</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Wishlist</button>
        </div>
      </div>
    </div>
     );
}
 
export default ProfilePage;