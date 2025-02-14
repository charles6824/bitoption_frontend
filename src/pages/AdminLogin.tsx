import { Carousel } from "@material-tailwind/react";
import {  useNavigate } from "react-router-dom";
import bgUser4 from "../assets/images/btcn.jpg"
import bgUser5 from "../assets/images/bitcoin-7678812_1920.jpg"
import bgUser7 from "../assets/images/btc.jpg"
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";
import { useAdminLoginMutation } from "../slices/baseApiSlice";

const AdminLogin = () => {

   const [showPassword,setShowPassword] =useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminLogin, {isLoading}] = useAdminLoginMutation();
    const navigate = useNavigate()
     const dispatch  = useDispatch();


  interface loginModel{
    email: string;
    password: string;
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!email){
      toast.error("Please enter email");
      return;
    }
    if(!password){
      toast.error("Please enter password");
      return;
    }
   

  
    const model: loginModel = {
      email,
      password
    };
  
    try {
      const response:any = await adminLogin({data:{payload:model}}).unwrap(); 
      console.log('response', response);

      if (response.status) {
        dispatch(setCredentials({...response})); 
        toast.success(response.message);
        navigate("/admin/dashboard");
      }else{
        toast.error(response.message);
      }
    } catch (error: any) {
      console.error("Login Error:", error);
     
    }
  };
  
  

  
    const handleShow = ()=>{
      setShowPassword(!showPassword)
    }
  return (
    <div className="flex items-center md:gap-16 h-screen bg-[#111111]">
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
            src={bgUser7 }
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      {/* Login Form */}
      <div className=" md:w-[39%] md:mr-20 px-3 md:px-0 uppercase  ">
      <div className=" md:p-8 p-4  text-white rounded-lg">
        <h1 className="md:text-[35px] text-[30px] text-center font-bold mb-4 md:mb-6 uppercase">member <span className="text-[#fa9e1f]">login</span></h1>
        <p className="mb-6 text-center text-[15px] text-gray-500">Send, receive and securely store your coins</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
             <input
             value={email}
             onChange={(e)=> setEmail(e.target.value)}
              type="email"
              className="w-full mb-4 py-3 bg-[#222222] text-[13px] px-3 border-none  rounded-md focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your email"
            
            />
          </div>
          <div className="relative">
            <input
             value={password}
             onChange={(e)=> setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              className="w-full py-3 bg-[#222222] text-[13px] px-3 border-none  rounded-md focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your password"
            
            />
                     <span onClick={handleShow} className="absolute top-4 right-8 ">
                         {showPassword ?  <FaEyeSlash/> : <FaEye className="text-white"/>}
                        </span>
          </div>
        

          {isLoading ? (<>
          <button
						className="w-full tracking-[1.25px] cursor-pointer h-[52px] mt-[23px] rounded-[5px] text-[20px]  text-white bg-[#1d1d1d] flex gap-2 justify-center items-center"
						type="button"
						disabled={true}
					>
						<span>Loading</span>
						<div className="w-4 h-4 border-4 border-[#FFF] border-dotted rounded-full animate-spin mr-4"></div>
					</button>
         

         </>) : (<>
          <button type="submit" className="w-full bg-[#fa9e1f] text-white py-4  rounded hover:bg-[#e88c15] transition ">
            LOGIN
          </button>
         
         </>) }
          
        </form>
     
  
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;
