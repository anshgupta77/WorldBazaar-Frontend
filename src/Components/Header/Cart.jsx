import image from "../../assets/card_components/shopping_trends/img1.jpg";
const Cart = () => {
    return (
        <div className="flex items-center space-x-1">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
            >
                <path d="M6 2a1 1 0 00-.9.56L3.59 6H2a1 1 0 000 2h1l1.62 8.43a4 4 0 003.88 3.57h9a4 4 0 003.88-3.57L21 8h1a1 1 0 100-2h-1.59l-1.5-3.44A1 1 0 0018 2H6zm0 2h12l1.25 2.87A1 1 0 0118 6H6.23L6 4zm12.75 4l-1.38 7.25a2 2 0 01-1.94 1.75h-9a2 2 0 01-1.94-1.75L4.25 8h14.5zM7 20a2 2 0 11-4 0 2 2 0 014 0zm12 0a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <p className="text-sm font-bold">Cart</p>
            
        </div>
    );
};

export default Cart;
