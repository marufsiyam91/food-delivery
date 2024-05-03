import { useContext } from "react";
import { assets } from "../assets/assets";
import { FoodieContext } from "../Contexts/FoodieContext";

const SingleFood = ({ item: { _id, name, price, description, image } }) => {
  
    const {state: {cartItems}, dispatch} = useContext(FoodieContext)


    


  return (
    <div className="shadow-sm hover:shadow-lg duration-300 rounded-xl">
      <div className="relative">
        <img className="rounded-t-xl w-full" src={image} alt="" />

        <div className="absolute bottom-2 right-2 duration-300 transition">
        {
            !cartItems[_id] 
            ? 
            <img className="duration-300 transition w-10" onClick={() => dispatch({type: 'addItems', payload: _id})} src={assets.add_icon_white}/>
            :
            <div className="flex items-center gap-2 bg-white p-1 rounded-[30px] duration-300 transition">
                <img className="w-8" onClick={() => dispatch({type: 'removeItem', payload: _id})} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[_id]}</p>
                <img className="w-8" onClick={() => dispatch({type: 'addItems', payload: _id})} src={assets.add_icon_green} alt="" />
            </div>
        }
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center">
          <p className="text-xl font-cursive font-semibold">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="text-sm font-urbanist font-medium my-2 text-[#676767]">{description}</p>
        <p className="font-urbanist text-orange-600 font-semibold text-2xl">${price}</p>
      </div>
    </div>
  );
};

export default SingleFood;
