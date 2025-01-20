import { Link } from "react-router-dom";

const AccountList = () => {
    return (
        <Link to="/login">
            <div className="text-sm border border-transparent p-2 hover:border-gray-400 rounded-md transition-all duration-200">
                <p>Hello, Sign in</p>
                <p className="font-bold">Account & Lists</p>
            </div>
        </Link>
    );
};

export default AccountList;
