import { Link } from "react-router-dom"
import hero from "../assets/images/bg-banner.jpg"
import abtImg from "../assets/images/about-us.png"
import { experts } from "../utils/Experts"
import ExpertCard from "../components/ExpertCard"

const About = () => {
  return (

    /*ABOUT US*/
    <div className="bg-[#111111]" >
    <div className="w-full h-auto bg-cover bg-center py-12 md:py-20"
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${hero})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="flex flex-col justify-between items-center">
       <h1 className="text-[60px] text-white font-bold">ABOUT <span className="text-[#fa9e1f]">US</span></h1>
       <hr className="text-[#fa9e1f] w-24" />
    </div>
  </div>


{/* ABOUT US */}

<div className="py-16">
    {/* <h1 className="text-[#FFF] text-center text-[28px] md:text-[40px] font-bold">
      ABOUT <span className="text-[#fa9e1f]">US</span>
    </h1> */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-3">
      <hr className="w-[50px] border border-[#fa9e1f]" />
      <p className="text-[#fff] text-center uppercase text-sm md:text-base">
        A commercial website that lists wallets, exchanges, and other bitcoin-related info
      </p>
      <hr className="w-[50px] border border-[#fa9e1f]" />
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-6 px-4 md:px-0 text-justify">
      <img src={abtImg} alt="About Us" className="max-w-full md:max-w-[400px] w-full h-auto" />
      <div className="text-[#fff] max-w-full md:max-w-[600px] text-center md:text-left">
        <h1 className="text-[24px] md:text-[32px] font-bold mb-4">247 <span className="text-[#fa9e1f]">BITOPTION</span> </h1>
        <p className="w-full leading-relaxed mb-7 text-sm md:text-base">
          A place for everyone who wants to simply buy and sell Bitcoins. Deposit funds using your
          Visa/MasterCard or bank transfer. Instant buy/sell of Bitcoins at fair price is
          guaranteed. Nothing extra. Join over 700,000 users from all over the world satisfied with
          our services.
        </p>
        <Link
          to="/about"
          className="bg-[#fa9e1f] font-semibold text-[#fff] py-4 px-6 text-sm md:py-3 md:px-8 hover:text-[#d37d38]"
        >
          READ MORE
        </Link>
      </div>
    </div>
  </div>


{/* Experts */}
  <div className="md:py-16 py-7 text-center px-4">
    <h1 className="text-[#fff] text-[28px] md:text-[40px] font-bold uppercase">OUR EXPERTS</h1>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
      <hr className="w-[50px] border border-[#fa9e1f]" />
      <p className="text-[#fff] text-sm md:text-base">
        A talented team of Cryptocurrency experts based in London
      </p>
      <hr className="w-[50px] border border-[#fa9e1f]" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 bg-black py-8">
      {experts &&
        experts.map((expert,index) => (
          <div key={index}>
            <ExpertCard expert={expert} />
          </div>
        ))}
    </div>
  </div>

{/*  */}
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

      <button className="py-3 px-6 md:px-10 bg-[#fa9e1f] text-[#fff] font-bold text-sm md:text-base">
        REGISTER NOW
      </button>
    </div>
  </div>
  
    </div>
  )
}

export default About
