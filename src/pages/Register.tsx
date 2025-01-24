import { Carousel, Input } from "@material-tailwind/react";
import bgUser1 from "../assets/images/bg-user.jpg"
import bgUser2 from "../assets/images/bg-user-2.jpg"
import bgUser3 from "../assets/images/bg-user-3.jpg"
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="flex items-center justify-between h-full  md:min-h-screen bg-[#111111]">
      {/* Carousel */}
      <div className="hidden md:block h-[100vh]  w-[40%]">
        <Carousel
          autoplay
          loop
          className="rounded-sm h-full"
          placeholder=""
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
            src={bgUser1}
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src={bgUser2}
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src={bgUser3}
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      {/* Login Form */}
      <div className="bg-[#111111] md:w-[42%] md:mr-20 px-3 md:px-0 uppercase">
      <div className=" md:p-8 p-4  text-white rounded-lg">
        <h1 className="md:text-[50px] text-[30px] text-center font-bold mb-4 md:mb-6 uppercase">get  <span className="text-[#fa9e1f]">started</span></h1>
        <p className="mb-4 text-center text-gray-500">Open account for free and start trading Bitcoins now!</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-2">NAME</label>
            <Input
              type="name"
              className="w-full py-4 border border-gray-400 rounded focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your name"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin=""
            />
          </div>
          <div>
            <label className="block text-sm mb-2">EMAIL</label>
            <Input
              type="email"
              className="w-full py-4 border border-gray-400 rounded focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your email"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin=""
            />
          </div>
          <div>
            <label className="block text-sm mb-2">PASSWORD</label>
            <Input
              type="password"
              className="w-full p-5 border  border-gray-400 rounded focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your password"
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              crossOrigin=""
            />
          </div>
          <button className="w-full bg-[#fa9e1f] text-white py-3 rounded hover:bg-[#e88c15] transition">
            CREATE AN ACCOUNT
          </button>
        </form>
        <div className="text-center mt-6">
          <Link to="/sign-up" className="text-sm text-gray-500 hover:text-gray-700">
           <p>ALREADY HAVE AN ACOUNT?<span className="text-[#fa9e1f]">LOGIN </span></p> 
          </Link>
          </div>
  
      </div>
    </div>
    </div>
  )
}

export default Register
