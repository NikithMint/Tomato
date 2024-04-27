import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../assets/assets'
import { StoreContext } from '../Context/StoreContext'
const FoodItem = ({id,name,price,description,image}) => {
  
  const {cartitem,addtocart,removefromcart,setcartitem}=useContext(StoreContext)
  return (
    <div className='food-item'>
      
      
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt=""/>
            {!cartitem[id] 
            ?<img className="add" src={assets.add_icon_white} onClick={()=>addtocart(id)}/>
            :<div className='food-item-counter'>

              <img onClick={()=>removefromcart(id)} src={assets.remove_icon_red} alt=""/>
              <p>{cartitem[id]}</p>
              <img onClick={()=>addtocart(id)} src={assets.add_icon_green} alt=""/>
            </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>

        </div>
      
    </div>
  )
}
export default FoodItem
