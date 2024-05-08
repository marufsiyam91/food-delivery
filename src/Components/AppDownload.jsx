import { assets } from "../assets/assets"

const AppDownload = () => {
  return (
    <div className="m-auto mt-[100px] text-center font-medium">
        <p className="text-4xl font-urbanist">For better experience download <br /> Tomato app</p>
        <div className="flex justify-center gap-10 p-8">
            <img className="hover:scale-105 transition duration-200" src={assets.play_store} alt="" />
            <img className="hover:scale-105 transition duration-200" src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload