// import placeholder from "./../../assets/placeholder.png"
// const Delivery = () => {
//     return ( 
//         <div className="">
//             <div>
//                 <img src={placeholder} className="w-9 h-9" />
//             </div>
//             <div>
//                 <div>
//                     Delivering to delhi 110001
//                 </div>
//                 <div>
//                     Update Location
//                 </div>
//             </div>
//         </div>
//      );
// }
 
// export default Delivery;

// const Delivery = () => {
//     return (
//         <div className="flex items-center space-x-2">
//             {/* Location Icon */}
//             <div>
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="white"
//                     viewBox="0 0 24 24"
//                     stroke="white"
//                     className=""
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 0v10m-7-4a7 7 0 0014 0c0-5-7-10-7-10s-7 5-7 10z"
//                     />
//                 </svg>
//             </div>

//             {/* Delivery Information */}
//             <div>
//                 <div className="text-gray-700 font-semibold">Delivering to Delhi 110001</div>
//                 <div className="text-blue-500 cursor-pointer hover:underline">Update Location</div>
//             </div>
//         </div>
//     );
// };

// export default Delivery;

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
                <p className="text-xl text-white cursor-pointer text-left">Update location</p>
            </div>
        </div>
    );
};

export default Delivery;

