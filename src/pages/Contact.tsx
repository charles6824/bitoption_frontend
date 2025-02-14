import hero from "../assets/images/bg-banner.jpg"
import { FaAddressBook,  FaHome, } from "react-icons/fa"
import { useContactMutation } from "../slices/baseApiSlice"
import { toast } from "react-toastify"
import { useState } from "react"
import LoadingBtn from "../components/LoadingBtn"
import {motion} from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};


const Contact = () => {

  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState("")
  const [message,setMessage] = useState("")

const [contact,{isLoading}] = useContactMutation() as any;

interface contactModel{
 firstName: string
 lastName: string
 email: string
 subject:string
 message:string
}
const handleContact =async (e : React.FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  const fields = { firstName, lastName, email, subject, message };

  for (const [key, value] of Object.entries(fields)) {
    if (!value) {
      toast.error(`Please enter your ${key}`);
      return;
    }
  }
  
  const model :contactModel ={
    firstName,
    lastName,
    email,
    subject,
    message
}

console.log("model",model);
try {
  const response = await contact({data:{payload:model}}).unwrap();
  if(response?.status){
    toast.success(response.message)
  } else{
    toast.error(response.message)
  }
    
} catch (error:any) {
  toast.error(error.message)
 
}

}

  
  return (

    /* ABOUT HERO*/
    <div>
        <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="w-full h-auto bg-cover bg-center py-12 md:py-20"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          variants={staggerContainer}
          className="flex flex-col justify-between items-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="md:text-[60px] text-[35px] text-white font-bold"
          >
            OUR <span className="text-[#fa9e1f]">CONTACT</span>
          </motion.h1>
          <motion.hr
            variants={fadeInUp}
            className="border-[#fa9e1f] w-24 mt-2"
          />
        </motion.div>
      </motion.div>


  <div className="md:flex justify-center items-center bg-[#111111] text-white p-[21px] md:p-10">
    <div  className="w-full lg:w-[60%]  lg:px-10">
    <h1 className="md:text-3xl text-2xl font-bold mb-4">Feel free to drop us a message</h1>
    <p className="text-gray-300 mb-8">
      Need to speak to us? Do you have any queries or suggestions? Please contact us about all enquiries, including membership and volunteer work, using the form below.
    </p>
    <form onSubmit={handleContact} className="bg-[#1a1a1a] py-8 md:px-6 rounded-lg shadow-lg">
        <div className="md:flex justify-center gap-6">

        
      <div className="mb-6">
        <input
              value={firstName}
              onChange={(e) =>setFirstName(e.target.value)}
              type="text"
              className="w-full py-5 md:py-3 bg-[#222222] text-[13px] px-14 border-none  rounded-md focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your firstname"
            
            />
      </div>
      <div className="mb-6">
        <input
             value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="w-full py-5 md:py-3 bg-[#222222] text-[13px] px-14 border-none  rounded-md focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your lastname"
            
            />
      </div>
      </div>

      <div className="md:flex items-center justify-center gap-6">

      <div className="mb-6">
       
        <input
           value={email}
            onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="w-full py-5 md:py-3 bg-[#222222] text-[13px] px-14 border-none  rounded-md focus:outline-none focus:border-[#fa9e1f]"
              placeholder="Enter your email"
            
            />
      </div>
      <div className="mb-6">
        
        <input
         value={subject}
          onChange={(e) => setSubject(e.target.value)}
              type="text"
              className="w-full py-5 md:py-3 bg-[#222222] text-[13px] px-14 border-none  rounded-md focus:outline-none focus:border-[#fa9e1f]"
              placeholder="subject"
            
            />
      </div>
      </div>

      <div className="mb-6">
        <textarea
         value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-32 p-3  text-white rounded-md border bg-[#1d1d1d] border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fa9e1f]"
          placeholder="MESSAGE"
        ></textarea>
      </div>
      <div>
        {isLoading ? (<div className="w-[30%]">
         <LoadingBtn/>
        
        </div>) : (<>
        
      
        <button
          type="submit"
          className=" bg-[#fa9e1f] text-white py-3 px-8  hover:bg-[#d68715] transition duration-300"
        >
          SEND MESSAGE
        </button>
        </>)}
      </div>
    </form>
  </div>

  <div className="bg-[#1d1d1d] md:p-12 p-5 text-[#fff] space-y-8">
    {/* Address Section */}
    <div className="flex items-center gap-4">
        <FaHome className="text-[#fa9e1f] text-[30px]" />
        <h1 className="text-xl font-bold uppercase">Address</h1>
    </div>
    <p className="text-sm text-gray-400 pl-10">906 S. Francisco Street.Los Angeles</p>

    {/* Phone Numbers Section */}
    <div className="flex items-center gap-4">
        <FaAddressBook className="text-[#fa9e1f] text-[24px]" />
        <h1 className="text-xl font-bold uppercase">Phone Numbers</h1>
    </div>
    <p className="text-sm text-gray-400 pl-10">+12136309890</p>

    {/* Email Section */}
    <div className="space-y-2">
        <div className="flex items-center gap-4">
            <FaAddressBook className="text-[#fa9e1f] text-[24px]" />
            <h1 className="text-xl font-bold uppercase">Email Address</h1>
        </div>
        <div className="pl-10 text-sm text-gray-400 space-y-1">
            <p>support@247Bitoption.com</p>
            {/* <p>info@example.com</p> */}
        </div>
    </div>

    {/* Social Profiles Section */}
    {/* <div>
        <div className="flex items-center gap-4">
            <FaLink className="text-[#fa9e1f] text-[24px]" />
            <h1 className="text-xl font-bold uppercase">Social Profiles</h1>
        </div>
        <div className="flex flex-wrap gap-4 mt-4 pl-10">
    <Link to="https://www.facebook.com" className="text-sm text-[#fff] hover:text-[#fa9e1f] flex items-center gap-2">
        <FaFacebook className="text-blue-900 text-[30px]" />
    </Link>
    <Link to="https://www.twitter.com" className="text-sm text-[#fff] hover:text-[#fa9e1f] flex items-center gap-2">
    <FaTwitter className="text-blue-500 text-[30px]" />
    </Link>
    <Link to="https://www.instagram.com" className="text-sm text-[#fff] hover:text-[#fa9e1f] flex items-center gap-2">
        <FaInstagram className="text-pink-500 text-[30px]" />
    </Link>
    <Link to="https://www.linkedin.com" className="text-sm text-[#fff] hover:text-[#fa9e1f] flex items-center gap-2">
       <FaLinkedin className="text-blue-700 text-[30px]" />
    </Link>
</div>

    </div> */}
</div>

  </div>



{/* ABOUT  */}
  <div
    className="w-full h-auto bg-cover bg-center py-12 md:py-20"
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${hero})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="flex flex-col justify-between items-center">
      <h1 className="text-[#FFFFFF] text-[20px] md:text-[40px] font-bold mb-4">
        Get Started Today With Bitcoin
      </h1>
      <p className="text-[14px] text-[#FFFFFF] text-center font-normal leading-5 mb-6">
        Open an account for free and start trading Bitcoins!
      </p>
      <button className="py-3 px-6 md:px-10 bg-[#fa9e1f] hover:bg-[#d37d38] text-[#fff] font-bold text-sm md:text-base">
        REGISTER NOW
      </button>
    </div>
  </div>
      
    </div>
  )
}

export default Contact
