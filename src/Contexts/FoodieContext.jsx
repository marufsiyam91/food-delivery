import { createContext, useReducer,  } from "react";
import { food_list } from "../assets/assets";

export const FoodieContext = createContext(null);

const initialValue = {
  category: 'Alll',  
  food_list,
  cartItems: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'active_menu':
        return {
            ...state,
            category: action.payload
        }
    case 'addItems':
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload]: (state.cartItems[action.payload] || 0) + 1,
        },
      };
    case 'removeItem':
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload]: state.cartItems[action.payload] - 1,
        },
      };
    default:
      return state;
  }
};

const FoodieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <FoodieContext.Provider value={{ state, dispatch }}>
      {children}
    </FoodieContext.Provider>
  );
};

export default FoodieContextProvider;