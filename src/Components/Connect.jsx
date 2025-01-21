import amazonLogo from "../assets/amazon_logo.png";
const Connect = () => {
    return ( 
        <div>
            <div className="flex justify-center items-center h-[7vh] bg-slate-700 text-md text-white font-serif hover:bg-slate-600 cursor-pointer" onClick={()=> window.scrollTo(0,0)}>
                Back to top
            </div>
            

            <div className="flex justify-center h-auto bg-slate-800 pt-7 my-auto">
                    <div className="flex flex-wrap justify-between w-3/4 text-white">
                    <div className="flex flex-col space-y-2 w-1/4 mb-6">
                        <span className="font-semibold text-lg">Get to Know Us</span>
                        <span>About Amazon</span>
                        <span>Careers</span>
                        <span>Press Releases</span>
                        <span>Amazon Science</span>
                    </div>

                    <div className="flex flex-col space-y-2 w-1/4 mb-6">
                        <span className="font-semibold text-lg">Connect with Us</span>
                        <span>Facebook</span>
                        <span>Twitter</span>
                        <span>Instagram</span>
                    </div>

                    <div className="flex flex-col space-y-2 w-1/4 mb-6">
                        <span className="font-semibold text-lg">Make Money with Us</span>
                        <span>Sell on Amazon</span>
                        <span>Sell under Amazon Accelerator</span>
                        <span>Protect and Build Your Brand</span>
                        <span>Amazon Global Selling</span>
                        <span>Supply to Amazon</span>
                        <span>Become an Affiliate</span>
                        <span>Fulfilment by Amazon</span>
                        <span>Advertise Your Products</span>
                        <span>Amazon Pay on Merchants</span>
                    </div>

                    <div className="flex flex-col space-y-2 w-1/4 mb-6">
                        <span className="font-semibold text-lg">Let Us Help You</span>
                        <span>Your Account</span>
                        <span>Returns Centre</span>
                        <span>Recalls and Product Safety Alerts</span>
                        <span>100% Purchase Protection</span>
                        <span>Amazon App Download</span>
                        <span>Help</span>
                    </div>
                    </div>
                </div>
            <div className="flex justify-center items-center h-[10vh] bg-slate-800 border-t border-white gap-9">

                <span className="text-2xl font-bold text-white"><img src={amazonLogo} alt="" className="w-auto h-11" /></span>
                <div className="flex space-x-4">
                    <div className="border border-white h-10 w-full rounded-md text-gray-400 pl-2 pr-7 flex items-center">
                        English
                    </div>
                    <div className="flex gap-5 justify-between border border-white h-10 w-full rounded-md text-gray-400 pl-2 pr-7 ">
                           <img
                                src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                                alt="India"
                                className="w-5 h-4 my-auto"
                            />
                           <div className="my-auto ">
                            India
                           </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Connect;


