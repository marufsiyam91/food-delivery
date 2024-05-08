import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="bg-[#323232] pt-12 pb-6 mt-20">
      <div className="max-w-screen-4xl mx-auto p-8 flex gap-20 border-b">

      <div className="flex flex-col items-start gap-4 w-2/4">
        <img src={assets.logo} alt="" />
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo error atque laudantium repellat eum! Dicta dolores laudantium ab facere eius. Optio minus earum accusantium delectus nisi molestias est reiciendis tempora eum distinctio neque voluptates animi dolor consequuntur veritatis corporis atque mollitia molestiae beatae 
        </p>
        <div className="flex gap-4"> 
          <img className="max-w-8" src={assets.facebook_icon} alt="" />
          <img className="max-w-8" src={assets.twitter_icon} alt="" />
          <img className="max-w-8" src={assets.linkedin_icon} alt="" />
        </div>
      </div>
      <div className="w-1/4">
        <h2 className="text-white text-xl mb-4">COMPANY</h2>
        <ul>
          <li className="text-white">Home</li>
          <li className="text-white">About us</li>
          <li className="text-white">Delivery</li>
          <li className="text-white">Privecy policy</li>
        </ul>
      </div>
      <div className="w-1/4">
        <h2 className="text-white text-xl mb-4">Get in touch</h2>
        <ul>
          <li className="text-white">+965 02105863</li>
          <li className="text-white">contact@gmail.com</li>
        </ul>
      </div>
      </div>
      <p className="text-center mt-6 text-white font-urbanist">copyright @ 2024 Tomato.com - All Right Reserved</p>
    </div>
  );
};

export default Footer;
