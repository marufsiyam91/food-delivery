
import { assets } from './../assets/assets';

const Navbar = () => {
  return (
    <nav className='flex h-20 items-center justify-start lg:justify-around'>
      <h2 className="font-cursive text-orange-500 font-semibold text-4xl">Foodies central</h2>
      <div className='hidden lg:block'>
        <ul className='flex items-center gap-8'>
          <li className='font-primary font-medium text-lg'> Home</li>
          <li className='font-primary font-medium text-lg'> Menu </li>
          <li className='font-primary font-medium text-lg'> Mobile-App</li>
          <li className='font-primary font-medium text-lg'> Contact us</li>
        </ul>
      </div>
      <div className='hidden lg:flex items-center gap-10'>
        <img src={assets.search_icon} alt="" />
        <img src={assets.basket_icon} alt="" />
        <button className='border hover:bg-orange-50 transition duration-300 border-orange-500 py-2 px-6 rounded-lg font-primary font-semibold'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar