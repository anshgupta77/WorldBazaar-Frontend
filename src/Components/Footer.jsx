

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
            <div className="text-center bg-gray-950">
            <ul className="flex justify-center text-sm gap-6">
              <li>
                <a href="#" className="hover:underline">
                  Conditions of Use & Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Interest-Based Ads
                </a>
              </li>
            </ul>
            <p className="text-sm">
              © 1996-2025, Amazon.com, Inc. or its affiliates
            </p>
          </div>
        </div>
     );
}
 
export default Footer;


