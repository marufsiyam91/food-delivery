
import { assets } from '../assets/assets';

const Navbar = () => {




  return (
    <nav className='flex h-20 items-center justify-start lg:justify-around'>
      <h2 className="font-cursive text-orange-500 font-semibold text-4xl">Foodies central</h2>
      <div className='hidden lg:block'>
        <ul className='flex items-center gap-8'>
          <li className='font-primary font-medium text-lg cursor-pointer'>Home</li>
          <li className='font-primary font-medium text-lg cursor-pointer'> Menu </li>
          <li className='font-primary font-medium text-lg cursor-pointer'> Mobile App</li>
          <li className='font-primary font-medium text-lg cursor-pointer'>Contact Us</li>
        </ul>
      </div>
      <div className='hidden lg:flex items-center gap-10'>
        <img src={assets.search_icon} alt="" />
        <div className='relative'>
          <img src={assets.basket_icon} alt="" />
          <div className='absolute w-3 h-3 rounded-full bg-orange-500 border border-orange-800 top-[-8px] right-[-8px]'>

          </div>
        </div>
        <button className='border hover:bg-orange-50 transition duration-300 border-orange-500 py-2 px-6 rounded-lg font-primary font-semibold'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar