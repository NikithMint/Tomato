import { createContext,useState} from "react"
import { food_list } from "../assets/assets"
export const StoreContext= createContext(null)

const StoreContextProvider = (props) => {

    const [cartitem,setcartitem]=useState({})

    const addtocart=(item_id) => {

        
        
        if(!cartitem[item_id]){

            setcartitem((prev)=>({...prev,[item_id]:1}))
        }
        else{
            setcartitem((prev)=>({...prev,[item_id]:prev[item_id]+1}))
        }
    }

    const removefromcart=(item_id) => {
        setcartitem((prev)=>({...prev,[item_id]:prev[item_id]-1}))
    }

     const getTotalCartAmount=() => {
        let totalAmount=0;
        for (const item in cartitem) {
            if (cartitem[item]>0){
            let itemInfo = food_list.find((product)=>product._id===item)
            totalAmount+=itemInfo.price*cartitem[item]
            }
        }
        return totalAmount;
     }



    const contextValue = {
        food_list,
        cartitem,
        addtocart,
        removefromcart,
        setcartitem,
        getTotalCartAmount
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
    
}

export default StoreContextProvider