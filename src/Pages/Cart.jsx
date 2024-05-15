import { useContext } from "react"
import { FoodieContext } from "../Contexts/FoodieContext"


const Cart = () => {

  const {state: {cartItems, food_list}, dispatch} = useContext(FoodieContext)



  return (
    <div className="max-w-screen-4xl mx-auto">
      <div className="grid grid-cols-6 w-full col-span-1 col-span-1.5 col-span-1 col-span-1 col-span-1 col-span-0.5">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {food_list.map((item, index) => {
        if(cartItems[item._id]>0)
          {
            return (
              <div key={index} className="grid py-4 items-center border-b grid-cols-6 w-full col-span-1 col-span-1.5 col-span-1 col-span-1 col-span-1 col-span-0.5">
                <img src={item.image} alt="" className="w-[50px]"/>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className="cursor-pointer" onClick={() => dispatch({type: 'removeItem', payload: item._id})}>X</p>
              </div>
            )
          }
      })
      }

    </div>
  )
}

export default Cart