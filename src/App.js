
import './App.css';
import Carousel from './Components/Carousel';
import Connect from './Components/Connect';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Carousel />
      <Main />
      <Connect />
      <Footer />

    </div>
  );
}

export default App;
