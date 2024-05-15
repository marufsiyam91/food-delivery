import { useState } from "react";
import { assets } from "../assets/assets";

const LoginPopup = ({ setShowPopup }) => {
  const [currstate, setCurrstate] = useState("Login");

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 z-10 flex items-center justify-center">
      <div className="absolute w-full h-full top-0 left-0 bg-slate-900 opacity-60"></div>
      <form className="max-w-[450px] h-auto bg-white opacity-100 z-10 px-6 py-10 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">{currstate}</h2>
          <img
            onClick={() => setShowPopup(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-6 py-8">
          {currstate === 'Sign up' && <input className="py-2 px-4 border rounded-md w-full" type="text" name="name" placeholder="your name here" />} 
          <input
            className="py-2 px-4 border rounded-md w-full"
            type="email"
            name="email"
            placeholder="Place your email"  
          />
          <input
            className="py-2 px-4 border rounded-md w-full"
            type="password"
            name="password"
            placeholder="your password here"  
          />
        </div>

        <button className="w-full py-3 rounded-md bg-[#EC5E42] text-white mb-6 ">
          {currstate}
        </button>

        <div className="flex gap-2 items-start mb-4">
          <input type="checkbox" name="" id="" className="mt-[6px]"/>
          <p>by clicking. I agree to the term of use & privecy policy.</p>
        </div>

        {currstate === "Login" ? (
          <div className="flex gap-2">
            <p>create a new account?</p>
            <button type="button" onClick={() => setCurrstate(prevState => prevState === 'Login' ? 'Sign up' : 'Login')}>click here</button>
          </div>
        ) : (
          <div className="flex gap-2">
            <p>already have an account?</p>
            <button type="button" onClick={() => setCurrstate(prevState => prevState === 'Login' ? 'Sign up' : 'Login')}>click here</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
