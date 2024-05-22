import { useContext } from "react";
import { FoodieContext } from "../Contexts/FoodieContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    state: { cartItems, food_list },
    dispatch,
    totalAmount,
  } = useContext(FoodieContext);

  const navigate = useNavigate()



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
        if (cartItems[item._id] > 0) {
          return (
            <div
              key={index}
              className="grid py-4 items-center border-b grid-cols-6 w-full col-span-1 col-span-1.5 col-span-1 col-span-1 col-span-1 col-span-0.5"
            >
              <img src={item.image} alt="" className="w-[50px]" />
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cartItems[item._id]}</p>
              <p>${item.price * cartItems[item._id]}</p>
              <p
                className="cursor-pointer"
                onClick={() =>
                  dispatch({ type: "removeItem", payload: item._id })
                }
              >
                X
              </p>
            </div>
          );
        }
      })}

      <div className="w-full flex py-12">
        <div className="w-1/2">
          <h3 className="text-2xl font-semibold font-urbanist">Cart Total</h3>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between border-b">
              <p>Subtotal</p>
              <p>{totalAmount()}</p>
            </div>
            <div className="flex justify-between border-b">
              <p>Delivery fee</p>
              <p>2</p>
            </div>
            <div className="flex justify-between ">
              <p className="text-xl font-semibold">Total</p>
              <p className="text-xl font-semibold">{totalAmount() + 2}</p>
            </div>
          </div>

          <button onClick={() => navigate('/place_order')} className="py-3 px-8  bg-orange-600 text-white font-semibold rounded-md mt-6">PROCEED TO CHECKOUT</button>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="w-[70%]">

          <h3>If you have a promo code. Enter it here</h3>
          <label className="bg-gray-200 rounded-md flex justify-between mt-2">
            <input className="bg-transparent px-4 w-full" type="text" name="promo code" placeholder="Promo Code"/>
            <button className="py-3 px-8 bg-slate-950 rounded-r-md text-white">Submit</button>
          </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
