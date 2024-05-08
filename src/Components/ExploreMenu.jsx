import { useContext } from "react";
import { menu_list } from "../assets/assets";
import { FoodieContext } from "../Contexts/FoodieContext";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="flex flex-col gap-6 p-8">
      <h1 className="text-4xl font-semibold font-urbanist text-[#262626]">
        Explore our menu
      </h1>
      <p className="max-w-[60%] font-primary font-medium">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingrediants and culinary expertise. Our mission
        is to satisfy your cravings and elevate your dining experience, one
        delicious meal at a time.
      </p>
      <div className="flex justify-between items-center text-center gap-7 my-5 overflow-x-scroll xscrollbar">
        {menu_list.map((item, index) => {
          return (
            <div key={index}>
              <img
                className="max-w-28 rounded-full transition duration-300"
                id={item.menu_name === category ? "activeMenu" : ""}
                onClick={() =>
                  setCategory((prevState) =>
                    category === item.menu_name ? "all" : item.menu_name
                  )
                }
                src={item.menu_image}
                alt=""
              />
              <p className="mt-3">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;

// {menu_list.map((item, index) => {
//     return (
//       <div key={index}>
//         <img
//           onClick={() =>
//             dispatch({type: 'activeMenu', payload: item.menu_name})
//           }
//           className="max-w-28 rounded-full transition duration-300"
//           id={item.menu_name === category ? "activeMenu" : ""}
//           src={item.menu_image}
//           alt=""
//         />
//         <p className="mt-6 text-[#747474] font-semibold cursor-pointer">
//           {item.menu_name}
//         </p>
//       </div>
//     );
//   })}
