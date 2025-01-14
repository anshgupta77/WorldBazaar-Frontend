const SearchBar = () => {
    return (
        <div className="flex items-center flex-grow bg-white rounded-md">
            <select className="bg-gray-100 text-sm p-2 border-r">
                <option>All</option>
                <option>Electronics</option>
                <option>Books</option>
                <option>Clothing</option>
            </select>
            <input
                type="text"
                placeholder="Search Amazon.in"
                className="flex-grow p-2 text-black text-sm outline-none"
            />
            <button className="bg-yellow-500 px-4 py-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-black"
                >
                    <path d="M10 2a8 8 0 105.293 14.707l5.12 5.12a1 1 0 001.414-1.414l-5.12-5.12A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
