import amazon from "../assets/amazon_logo.png"
import amazonLogo from "../assets/amazon_logo.png";
const Connect = () => {
    return ( 
        <div>
            <div className="flex justify-center items-center h-[7vh] bg-slate-700 text-xl text-white font-serif">
                Back to top
            </div>
            <div className="flex justify-center h-[50vh] bg-slate-800">
                <div className="flex mt-[45px] justify-between w-3/5 text-white ">
                    <div className="flex flex-col space-y-2">
                        <span className="font-semibold">Get to know us</span>
                        <span>About Amazon</span>
                        <span>Careers</span>
                        <span>Press releases</span>
                        <span>Amazon science</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span className="font-semibold">Make Money with Us</span>
                        <span>Sell products on Amazon</span>
                        <span>Advertise your products</span>
                        <span>Become an Affiliate</span>
                        <span>Self-Publish with Us</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span className="font-semibold">Amazon Payment Products</span>
                        <span>Amazon Business Card</span>
                        <span>Shop with Points</span>
                        <span>Reload Your Balance</span>
                        <span>Amazon Currency Converter</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                        <span className="font-semibold">Let Us Help You</span>
                        <span>Amazon and COVID-19</span>
                        <span>Your Account</span>
                        <span>Returns</span>
                        <span>Help</span>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-[10vh] bg-slate-800 border-t border-white gap-9">
                {/* "amazon" part */}
                <span className="text-2xl font-bold text-white"><img src={amazonLogo} alt="" className="w-auto h-11" /></span>
                <div className="flex space-x-4">
                    <div className="border border-white h-10 w-full rounded-md text-gray-400 pl-2 pr-7 flex items-center">
                        English
                    </div>
                    <div className="border border-white h-10 w-full rounded-md text-gray-400 pl-2 pr-7 flex items-center">
                            India
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default Connect;
