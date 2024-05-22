import { useContext } from "react"
import { FoodieContext } from "../Contexts/FoodieContext"

    

const PlaceOrder = () => {

  const {totalAmount} = useContext(FoodieContext)

  return (
    <div className="max-w-screen-4xl mx-auto py-20">
      <form className="flex justify-between">
        <div className="flex flex-col gap-4 basis-1/2">
          <p className="text-2xl text-black font-urbanist font-semibold">Delivery Information</p>
          <div className="flex gap-4">
            <input className="w-full bg-white border p-2 rounded-md" type="text" placeholder="First Name" />
            <input className="w-full bg-white border p-2 rounded-md" type="text" placeholder="Last Name" />
          </div>
          <input className="w-full bg-white border p-2 rounded-md" type="email" placeholder="Email" />
          <input className="w-full bg-white border p-2 rounded-md" type="text" placeholder="Street" />
          <div className="flex gap-4">
            <input className="w-full bg-white border p-2 rounded-md" type="text" placeholder="City" />
            <input className="w-full bg-white border p-2 rounded-md" type="text" placeholder="State" />
          </div>
          <div className="flex gap-4">
            <input className="w-full bg-white border p-2 rounded-md" type="text" placeholder="Zip code" />
            <input className="w-full bg-white border p-2 rounded-md" type="text" placeholder="Country" />
          </div>
          <input className="w-full bg-white border p-2 rounded-md" type="text" placeholder="Phone" />
        </div>
        <div>
        <div className="basis-1/2">
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

            <button className="py-3 px-8  bg-orange-600 text-white font-semibold rounded-md mt-6">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder