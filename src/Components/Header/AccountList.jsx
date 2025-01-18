import { Link } from "react-router-dom";

const AccountList = () => {
    return (
        <Link to="/login">
            <div className="text-sm">
                <p>Hello, Sign in</p>
                <p className="font-bold">Account & Lists</p>
            </div>
        </Link>
    );
};

export default AccountList;
