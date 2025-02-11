import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import abtImg from "../assets/images/about-us.png"
import Card from "../components/Card";
// import { cards } from "../utils/BitcoinCard";
import { experts } from "../utils/Experts";
import ExpertCard from "../components/ExpertCard";
import BitcoinNewsCard from "../components/BitcoinNewsCard";
import { bitcoinNewsCards } from "../utils/BitcoinNewsCard";
import callToAction_Bg from "../assets/images/call-to-action-bg.jpg"
import VidoeSection from "../components/VidoeSection";
import img from "../assets/images/bitcoin-6992422_1920.jpg"
import { useGetAllPackagesQuery } from "../slices/packageSlice";
import LoadingComponent from "../components/LoadingComponent";

const HomePage = () => {

  const {data:packages,isLoading} =useGetAllPackagesQuery({}) as any;
  return (
    <>

      <Hero/>
      <main className="bg-[#111111] px-4 ">
  {/* ABOUT US */}
  <div className="py-16">
    <h1 className="text-[#FFF] text-center text-[28px] md:text-[40px] font-bold">
      ABOUT <span className="text-[#fa9e1f]">US</span>
    </h1>
    <div className="flex flex-{}col md:flex-row items-center justify-center gap-4 py-3">
      <hr className="w-[50px] border border-[#fa9e1f]" />
      <p className="text-[#fff] text-center uppercase text-sm md:text-base">
        A commercial website that lists wallets, exchanges, and other bitcoin-related info
      </p>
      <hr className="w-[50px] border border-[#fa9e1f]" />
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-6">
      <img src={abtImg} alt="About Us" className="max-w-full md:max-w-[400px] w-full h-auto" />
      <div className="text-[#fff] max-w-full md:max-w-[600px] text-center md:text-left">
        <h1 className="text-[24px] md:text-[32px] font-bold mb-4">247 <span className="text-[#fa9e1f]">BITOPTION</span> </h1>
        <p className="w-full leading-relaxed mb-7 text-sm md:text-[17px]">
          A place for everyone who wants to simply invest, buy and sell Bitcoins. Deposit funds using your
          Visa/MasterCard or bank transfer. Instant buy/sell of Bitcoins at fair price is
          guaranteed. Nothing extra. Join over 700,000 users from all over the world satisfied with
          our services.
        </p>
        <Link
          to="/about"
          className="bg-[#fa9e1f] font-semibold text-[#fff] py-4 px-20 text-sm md:py-3 md:px-8 hover:bg-[#d37d38]"
          >
          READ MORE
        </Link>
      </div>
    </div>
  </div>

  {/* video section   */}
<div className=" h-full ">

<VidoeSection/>
</div>



{/* AFFORDABLE PACKAGES */}
  <div className="py-16 text-center">
    <h1 className="text-[#fff] uppercase text-[28px] md:text-[40px] font-bold">AFFORDABLE PACKAGES</h1>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center py-4">
      <hr className="w-[50px] border border-[#fa9e1f]" />
      <p className="text-[#fff] text-sm md:text-[20px]">
        Purchase Bitcoin using a credit card or with your linked bank account
      </p>
      <hr className="w-[50px] border border-[#fa9e1f]" />
    </div>
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 md:py-6 space-y-6 md:space-y-0">
    
    </div>
  </div>

  {/* BITCOIN CARD */}
  {isLoading ? (<>
  <LoadingComponent/>
  
  </>) : 

  
  (<>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6">
    {packages &&
      packages.data.map((item: any, i: number) => {
        return (
        <div key={i}>
          <Card card={item} link="/packages" />
        </div>
      )})}
  </div>
  </>)}

  {/* EXPERTS CARDS */}
  <div className="py-16 text-center">
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




{/* Review */}
  <>
  <div className="flex md:flex-row flex-col items-center relative p-2">
  {/* Left Section */}

  <div className="relative flex items-center justify-center  ">
    <img
      src={img}
      className="md:w-[400px] h-[70vh]  shadow-lg opacity-30"
    />

    {/* Text Overlay */}
    <div className="absolute  text-white italic md:text-[15px] text-[17px] md:w-80  leading-7 md:font-bold">
      <p>Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It's the dawn of a better, more free world.</p>
    </div>
  </div>
  {/* Image Section with Text Overlay */}
  <div className="bg-[#1d1d1d] py-5 md:px-24 md:w-[70%] md:h-[70vh] text-center">
    {/* Your content */}
  </div>
</div>


</>

  {/* BITCOIN NEWS */}
  <div className="py-16 text-center">
    <h1 className="text-[#fff] uppercase text-[28px] md:text-[40px] font-bold">BITCOIN NEWS</h1>
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
      <hr className="w-[50px] border border-[#fa9e1f]" />
      <p className="text-[#fff] text-sm md:text-base">
        Discover the latest news about Bitcoin on our blog
      </p>
      <hr className="w-[50px] border border-[#fa9e1f]" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 bg-black  py-8 ">
      {bitcoinNewsCards &&
        bitcoinNewsCards.map((card,index) => (
          <div key={index}>
            <BitcoinNewsCard card={card} />
          </div>
        ))}
    </div>
  </div>


  {/* CALL TO ACTION */}
  <div
    className="w-full h-auto bg-cover bg-center py-12 md:py-20"
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${callToAction_Bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="flex flex-col justify-between items-center">
      <h1 className="text-[#FFFFFF] text-[20px] md:text-[40px] font-bold mb-4">
        Get Started Today With Bitcoin
      </h1>
      <p className="text-[20px] text-[#FFFFFF] text-center font-normal leading-5 mb-6">
        Open an account for free and start trading Bitcoins!
      </p>
      <Link to="/sign-up" className="py-3 px-20 md:px-10  bg-[#fa9e1f] hover:bg-[#d37d38] text-[#fff] font-bold text-sm md:text-base">
        REGISTER NOW
      </Link>
    </div>
  </div>
</main>

    </>
    
  )
}

export default HomePage
