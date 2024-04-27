import React from 'react'
import './Cart.css'
import { StoreContext } from '../Context/StoreContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const {cartitem,food_list,removefromcart,getTotalCartAmount} =useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            <p>{console.log(cartitem[1])}</p>
            
           

          </div>
          <br />
          <hr />
          {food_list.map((item,index)=>{ 

            if(cartitem[item._id]>0){
              console.log("item._id",item._id)
              
              return (
                <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt=""/>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartitem[item._id]}</p>
                  <p>${item.price*cartitem[item._id]}</p>
                  <p className='cross' onClick={()=>removefromcart(item._id)}>x</p>
                  
                </div>
                <hr />
                </div>
                
              )


            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr /> 
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              
            </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promocode, Enter it here</p>
              <div className="cart-promocode-input">
                <input type='text' placeholder='Enter your promo code'/>
                <button>APPLY</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      
    </div>
  )
}

export default Cart
