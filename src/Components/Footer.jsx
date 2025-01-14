// const Footer = () => {
//     return ( 
//         <div className="bg-gray-950 h-[30vh]">
//             <div>
//                 <div>
//                     <div>
//                     AbeBooks
//                     Books, art
//                     & collectibles				
//                     </div>
//                     <div>Amazon Web Services
//                     Scalable Cloud 
//                     Computing Services</div>
//                     <div>
//                         Audible
//                         Download
//                         Audio Books	
//                     </div>
//                     <div>
//                     IMDb
//                     Movies, TV
//                     & Celebrities
//                     </div>
//                 </div>
//                 <div>
//                     <div>
//                     Shopbop
//                     Designer
//                     Fashion Brands						

//                     </div>
//                     <div>
//                     Amazon Business
//                     Everything For
//                     Your Business
//                     </div>
//                     <div>
//                     Prime Now
//                     2-Hour Delivery
//                     on Everyday Items
//                     </div>
//                     <div>
//                     Amazon Prime Music
//                     100 million songs, ad-free
//                     Over 15 million podcast episodes
//                     </div>
//                 </div>
//             </div>
//             <div>

//             </div>
//         </div>
//      );
// }
 
// export default Footer;

const Footer = () => {
    return ( 
        <div className="bg-gray-950 h-[30vh] text-white">
            <div className="flex flex-col justify-between px-8 py-4 mx-auto w-3/5">
                <div className="flex space-y-4 gap-10">
                    <div className="text-left">AbeBooks <br /> Books, art & collectibles</div>
                    <div className="text-left">Amazon Web Services <br /> Scalable Cloud Computing Services</div>
                    <div className="text-left">Audible <br /> Download Audio Books</div>
                    <div className="text-left">IMDb <br /> Movies, TV & Celebrities</div>
                </div>
                <div className="flex space-y-4 gap-10">
                    <div className="text-left">Shopbop <br /> Designer Fashion Brands</div>
                    <div className="text-left">Amazon Business <br /> Everything For Your Business</div>
                    <div className="text-left">Prime Now <br /> 2-Hour Delivery on Everyday Items</div>
                    <div className="text-left">Amazon Prime Music <br /> 100 million songs, ad-free. Over 15 million podcast episodes</div>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                {/* Any additional content you want to add here */}
            </div>
        </div>
     );
}
 
export default Footer;
