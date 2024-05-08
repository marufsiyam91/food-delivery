
import { useState } from 'react';
import ExploreMenu from '../Components/ExploreMenu';
import FoodItems from '../Components/FoodItems';
import Hero from './../Components/Hero';

const Home = () => {

  const [category, setCategory] = useState('all')



  return (
    <main className='p-8 max-w-screen-4xl mx-auto'>
      <Hero/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodItems category={category}/>
    </main>
  )
}

export default Home