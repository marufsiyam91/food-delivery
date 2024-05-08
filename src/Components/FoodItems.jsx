import { food_list } from "../assets/assets"
import SingleFood from "./SingleFood"

const FoodItems = ({ category }) => {
  return (
    <div className="pt-8 border-t-2">
      <h2 className="font-urbanist text-4xl font-semibold mb-6">Top dishes near you</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 animate-FadeIn">
        {
          food_list.map((item) => {    
            if (category === 'all' || category === item.category) {
              return (
                <SingleFood key={item.id} item={item}/>
              )
            } 
            return null; 
          })
        }
      </div>
    </div>
  )
}


export default FoodItems