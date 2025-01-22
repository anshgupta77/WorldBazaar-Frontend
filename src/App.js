
import './App.css';

import Connect from './Components/Connect';
import Footer from './Components/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import Login from './Pages/Login';
import {useDispatch, useSelector } from 'react-redux';
import ProfilePage from './Pages/ProfilePage';
import ProductPage from './Pages/ProductPage';
import { useEffect } from 'react';
import { setCurrentUser } from './Slices/authSlice';
import { useRetryCall } from './hook';
import Auth from './Auth';
function Layout(element){
return (
  <>
    <Header />
    <Navbar />
    {element} 
    <Connect />
    <Footer />
  </>
)}
function App() {
  const user  = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();
  const [loading, userFetch] = useRetryCall("get");
  useEffect(() => {
   userFetch("http://localhost:4000/user/userinfo")
   .then(response =>{
    console.log(response);
    dispatch(setCurrentUser(response.data.user));

   }).catch(err => console.log(err.message));
  },[]);
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path="/" element={Layout(<Home />)}></Route>
          {/* <Route element = {<Auth />}>  */}
            <Route path="/product" element={Layout(<ProductPage />)}></Route>
            <Route path="/cart" element={Layout(<CartPage />)}></Route>
          {/* </Route> */}
          <Route path="/profile" element={Layout(<ProfilePage />)}></Route>
          <Route path="/login" element={<Login />}></Route>
          </Routes>
      </Router>
    </div>
  
  );
}

export default App;
