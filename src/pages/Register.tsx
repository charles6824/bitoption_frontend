import { Carousel } from "@material-tailwind/react";
import bgUser4 from "../assets/images/btcn.jpg"
import bgUser5 from "../assets/images/bitcoin-7678812_1920.jpg"
import bgUser7 from "../assets/images/btc.jpg"
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Register = () => {

  const [showPassword,setShowPassword] =useState(false);

  const handleShow = ()=>{
    setShowPassword(!showPassword)
  }



  return (
    <div className="flex items-center md:gap-16  h-screen md:min-h-screen bg-[#111111]">
      {/* Carousel */}
      <div className="hidden md:block h-[100vh]  w-[45%]">
        <Carousel
          autoplay
          loop
          className="rounded-sm h-full"
          placeholder=""
          nextArrow={false}
          prevArrow={false}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-orange-400/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src={bgUser5}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={bgUser4}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={bgUser7}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      {/* Login Form */}
      <div className="bg-[#111111 ] md:w-[42%] px-3 md:px-0 uppercase">
      <div className=" md:p-8 p-4 rounded-lg w-full">
        <h1 className="md:text-[50px] text-[30px] text-white text-center font-bold mb-4 md:mb-6 uppercase">get  <span className="text-[#fa9e1f]">started</span></h1>
        <p className="mb-4 text-center text-gray-500">Open account for free and start trading Bitcoins now!</p>
        <form className="space-y-4 text-white">
          <div>
            <input
              type="text"
              className="w-full py-3 bg-[#222222]  px-4 text-[13px]  border-none border-[#fa9e1f] rounded-md focus:outline-none focus:border-[#fa9e1f] "
              placeholder="Enter your name"
             
            />
          </div>
          <div className="py-3">
            <input
              type="email"
              className="w-full py-3 bg-[#222222] text-[13px]  px-3 border-none border-[#fa9e1f] rounded-md focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your email"
            
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full py-3 bg-[#222222] text-[13px] px-3 border-none  rounded-md focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your password"
            
            />
            <span onClick={handleShow} className="absolute right-8 top-4 ">
             {showPassword ?<FaEyeSlash/> : <FaEye className="text-white"/>}
            </span>
          </div>

          <button className="w-full bg-[#fa9e1f] text-white py-4   rounded hover:bg-[#e88c15] transition ">
            CREATE AN ACCOUNT
          </button>
        </form>
        <div className="text-center mt-6">
          <Link to="/sign-in" className="text-sm text-gray-500 hover:text-gray-700">
           <p>ALREADY HAVE AN ACOUNT?<span className="text-[#fa9e1f]">LOGIN </span></p> 
          </Link>
          </div>
  
      </div>
    </div>
    </div>
  )
}

export default Register
