import { useContext } from "react"
import { FoodieContext } from "../Contexts/FoodieContext"
import { food_list } from "../assets/assets"
import SingleFood from "./SingleFood"


const FoodItems = () => {

    const {state} = useContext(FoodieContext)
    console.log(state)


  return (
    <div className="pt-8 border-t-2">
        <h2 className="font-urbanist text-4xl font-semibold mb-6">Top dishes near you</h2>
        <div className="grid gap-6 grid-cols-4 animate-FadeIn">
            {
                food_list.map((item,index) => {
                    return(
                        <SingleFood key={item.id} item={item}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FoodItems