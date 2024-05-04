import React from 'react'
import Navbar from './Navbar/Navbar'
import './index.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Home/Home'
import Cart from './Cart/Cart'
import Placeorder from './Placeorder/Placeorder'
import Footer from './Footer/Footer'
import { useState } from 'react'
import Login from './Login/Login'
const App = () => {

  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/order" element={<Placeorder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}
export default App
