import amazon_logo from "../../assets/amazon_logo.png"
const AmazonLogo = () => {
    return ( 
        <div className="flex items-center justify-center p-2 border border-transparent hover:border-gray-400 rounded-md transition-all duration-200">
            <img src={amazon_logo} alt="" className="w-auto h-8" />
        </div>
     );
}
 
export default AmazonLogo;