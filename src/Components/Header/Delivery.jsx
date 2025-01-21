const Delivery = () => {
    return (
        <div className="flex items-center space-x-2 border border-transparent p-2 hover:border-gray-400 rounded-md transition-all duration-200">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
            >
                <path d="M12 2C8.1 2 5 5.1 5 9c0 3.9 4.4 9.7 6.6 12.6.2.3.5.4.8.4s.6-.1.8-.4C14.6 18.7 19 12.9 19 9c0-3.9-3.1-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
            <div>
                <p className="text-sm font-medium text-gray-500">Delivering to Delhi 110001</p>
                <p className="text-md text-white cursor-pointer text-left">Update location</p>
            </div>
        </div>
    );
};

export default Delivery;

