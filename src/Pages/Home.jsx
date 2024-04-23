

const Home = () => {

  const BackgroundImage = "url(../../../../public/header_img.png)"


  return (
    <div style={{backgroundImage: BackgroundImage}} className="bg-cover bg-no-repeat relative h-[60vh] rounded-xl m-8 bg-center ">
      <div className="absolute flex flex-col items-start max-w-[50%] gap-4 bottom-[10%] left-16 animate-FadeIn">
      <h2 className="text-[80px] leading-none  font-urbanist text-white font-semibold">Order your favoutite food here!!</h2>
      <p className="text-lg text-white font-primary">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingrediants and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <button className="py-3 px-6 text-[#747474] bg-white font-semibold rounded-[25px]">View Menu</button>
      </div>
    </div>
  )
}

export default Home