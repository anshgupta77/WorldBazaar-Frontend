import Carousel from "../Components/Carousel";
import Main from "../Components/Main";
const Home = () => {
    return ( 
            <div className="relative">
                <Carousel />
                <div className="relative z-10 -mt-[25vh] bg-transparent">
                <Main />
            </div>
            </div> 
     );
}
 
export default Home;