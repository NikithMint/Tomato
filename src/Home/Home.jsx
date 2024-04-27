import React, { useState } from 'react'
import './Home.css'
import Header from '../Header/Header.jsx'
import Exploremenu from '../Exploremenu/Exploremenu.jsx'
import FoodDisplay from '../FoodDisplay/FoodDisplay.jsx'
import Appdownload from '../Appdownload/Appdownload.jsx'
const Home = () => {

  const [category,setcategory]=useState("All")
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setcategory={setcategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}
export default Home
