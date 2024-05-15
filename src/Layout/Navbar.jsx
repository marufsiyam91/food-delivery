import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
import LoginPopup from "../Components/LoginPopup";

const Navbar = () => {

  const [showPopup, setShowPopup] = useState(false)

  return (
    <nav className="flex h-20 items-center justify-between lg:justify-around max-w-screen-4xl mx-auto px-8 lg:px-4">
      {
        showPopup &&
        <LoginPopup setShowPopup={setShowPopup}/>
      }
      <h2 className="font-cursive text-orange-500 font-semibold text-3xl 2xl:text-4xl">
        <NavLink to={"/"}>Foodies central</NavLink>
      </h2>


        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li className="font-primary text-md 2xl:text-lg font-medium text-slate-700 cursor-pointer">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="font-primary text-md 2xl:text-lg font-medium text-slate-700 cursor-pointer">
              {" "}
              <NavLink to={"/cart"}>Menu</NavLink>
            </li>
            <li className="font-primary text-md 2xl:text-lg font-medium text-slate-700 cursor-pointer">
              <NavLink to={"/place_order"}>Mobile App</NavLink>
            </li>
            <li className="font-primary text-md 2xl:text-lg font-medium text-slate-700 cursor-pointer">
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6 lg:gap-10">
          <img src={assets.search_icon} alt="" />
          <div className="relative">
            <img src={assets.basket_icon} alt="" />
            <div className="absolute w-3 h-3 rounded-full bg-orange-500 border border-orange-800 top-[-8px] right-[-8px]"></div>
          </div>
          <button onClick={() => setShowPopup(prevState => !prevState)} className="border hover:bg-orange-50 transition duration-300 border-orange-500 py-2 px-6 rounded-lg font-primary font-semibold">
            Sign in
          </button>
        </div>
    </nav>
  );
};

export default Navbar;
