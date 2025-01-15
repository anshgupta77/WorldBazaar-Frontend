

const Footer = () => {
    return ( 
        <div className="bg-gray-950 h-[30vh] text-white">
            <div className="flex flex-col justify-between px-8 pt-10 mx-auto w-3/5 gap-10">
                <div className="flex gap-10">
                    <div className="text-left w-1/4 text-sm">AbeBooks <br /> Books, art & collectibles</div>
                    <div className="text-left w-1/4 text-sm">Amazon Web Services <br /> Scalable Cloud Computing Services</div>
                    <div className="text-left w-1/4 text-sm">Audible <br /> Download Audio Books</div>
                    <div className="text-left w-1/4 text-sm">IMDb <br /> Movies, TV & Celebrities</div>
                </div>
                <div className="flex gap-10">
                    <div className="text-left w-1/4 text-sm">Shopbop <br /> Designer Fashion Brands</div>
                    <div className="text-left w-1/4 text-sm">Amazon Business <br /> Everything For Your Business</div>
                    <div className="text-left w-1/4 text-sm">Prime Now <br /> 2-Hour Delivery on Everyday Items</div>
                    <div className="text-left w-1/4 text-sm">Amazon Prime Music <br /> 100 million songs, ad-free. Over 15 million podcast episodes</div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                {/* Any additional content you want to add here */}
            </div>
        </div>
     );
}
 
export default Footer;


