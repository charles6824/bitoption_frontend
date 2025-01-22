import { Link } from "react-router-dom"
import Hero from "../components/Hero"
import abtImg from "../assets/images/about-us.png"
import { MdSecurity } from "react-icons/md";
import Card from "../components/Card";
import { cards } from "../utils/BitcoinCard";
import { experts } from "../utils/Experts";
import ExpertCard from "../components/ExpertCard";
import BitcoinNewsCard from "../components/BitcoinNewsCard";
import { bitcoinNewsCards } from "../utils/BitcoinNewsCard";
import callToAction_Bg from "../assets/images/call-to-action-bg.jpg"

const HomePage = () => {
  return (
    <>

      <Hero/>
      <main className="bg-[#111111] px-[50px]">
        {/* ABOUT US */}
      <div className="py-16">
      <h1 className="text-[#FFF] text-center text-[40px] font-bold"> ABOUT <span className="text-[#fa9e1f]">US</span> </h1>
  <div className="flex items-center justify-center gap-4 py-3">
    <hr className="w-[50px] border border-[#fa9e1f]" />
    <p className="text-[#fff] uppercase">
      a commercial website that lists wallets, exchanges, and other bitcoin-related info
    </p>
    <hr className="w-[50px] border border-[#fa9e1f]" />
  </div>


  <div className="flex justify-center items-center gap-14 w-full py-6">
    <img src={abtImg} alt="About Us" className="max-w-[400px] w-full h-auto" />
    <div className="text-[#fff] max-w-[600px] ">
      <h1 className="text-[32px] font-bold mb-4">WE ARE BAYYA</h1>
      <p className="w-full leading-relaxed mb-7">
        A place for everyone who wants to simply buy and sell Bitcoins. Deposit funds using your Visa/MasterCard or bank transfer. Instant buy/sell of Bitcoins at fair price is guaranteed. Nothing extra. Join over 700,000 users from all over the world satisfied with our services.
      </p>
      <Link
        to="/about"
        className="bg-[#fa9e1f] font-semibold text-[#fff] py-3 px-8   hover:text-[#d37d38]" > READ MORE</Link>
    </div>
  </div>
  </div>
  <div className="text-[#fff] flex items-center justify-center gap-12 py-32 bg-[#1d1d1d] ">
    <div className=" gap-4 space-y-20">

   
    <div className="bg-[#1d1d1d]">
    <MdSecurity className="text-[40px] m-auto text-[#fa9e1f]" />
    <h1 className="text-center text-[20px] font-bold">STRONG SECURITY</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div>
    <MdSecurity className="text-[40px] m-auto text-[#fa9e1f]" />
    <h1 className="text-center text-[20px] font-bold">HIGH LIQUIDITY</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div>
    <MdSecurity className="text-[40px] m-auto text-[#fa9e1f]" />
    <h1 className="text-center text-[20px] font-bold">WORLD COVERAGE</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    </div>


    <div className=" gap-4 space-y-20">
    <div className=" ">
    <MdSecurity  className="text-[40px] m-auto text-[#fa9e1f]"/>
    <h1 className="text-center text-[20px] font-bold">PAYMENT OPTIONS</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div>
    <MdSecurity className="text-[40px] m-auto text-[#fa9e1f]" />
    <h1 className="text-center text-[20px] font-bold">MOBILE APP</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    <div>
    <MdSecurity className="text-[40px] m-auto text-[#fa9e1f]" />
    <h1 className="text-center text-[20px] font-bold">COST EFFIENCIENCY</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
    </div>
    <img src={abtImg} alt="" />
  </div>


{/* AFFORDABLE PACKAGES */}

<div className="py-16">
    <h1 className="text-[#fff] uppercase text-[40px] text-center font-bold"> AFFORDABLE PACKAGES</h1>
    <div className="flex items-center justify-center gap-4 ">
    <hr className="w-[50px] border border-[#fa9e1f]" />
    <p className="text-[#fff]">Purchase Bitcoin using a credit card or with your linked bank account</p>
    <hr className="w-[50px] border border-[#fa9e1f]" />
  </div>


  <div className="flex justify-center items-center space-x-4 py-9">
     <button className="bg-[#fa9e1f] py-2 px-8 text-[#fff] font-bold ">BUY</button>
     <button className=" text-[#fff] bg-[#fa9e1f] py-2 px-7 font-bold">SELL</button>
  </div>
  </div>
  <div>
  </div>

  {/* BITCOIN CARD */}
 <div className="grid grid-cols-4 gap-7 py-6">
   {cards && cards.map((card)=>(
    <div key={card.id} >
      <Card card={card}/>
    </div>
   ))}
</div>


{/* EXPERTS CARDS */}
<div className="py-16">
    <h1 className="text-[#fff]  text-[40px] text-center font-bold uppercase">our experts</h1>
    <div className="flex items-center justify-center gap-4 ">
    <hr className="w-[50px] border border-[#fa9e1f]" />
    <p className="text-[#fff]">A talented team of Cryptocurrency experts based in London</p>
    <hr className="w-[50px] border border-[#fa9e1f]" />
  </div>
  </div>

  <div className="grid grid-cols-4 gap-5 bg-black px-6">
    {experts && experts.map((expert)=>(
      <div>
        <ExpertCard expert={expert}/>
      </div>
    ))}
  </div>



  



{/* BITCOIN NEWS */}
  <div className="py-32">
    <h1 className="text-[#fff] uppercase text-[40px] text-center font-bold"> Bitcoin News</h1>
    <div className="flex items-center justify-center gap-4 ">
    <hr className="w-[50px] border border-[#fa9e1f]" />
    <p className="text-[#fff]">Discover latest news about Bitcoin on our blog</p>
    <hr className="w-[50px] border border-[#fa9e1f]" />
  </div>



  <div className=" grid grid-cols-3 gap-5 bg-black px-6">
      {bitcoinNewsCards && bitcoinNewsCards.map((card)=>(
        <div>
          <BitcoinNewsCard card={card}/>
        </div>
      ))}
    </div>
  </div>




  <div>
  <div className='w-full lg:h-[349px] md:h-[200px] bg-cover bg-center ' style={{background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${callToAction_Bg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className='flex flex-col justify-between items-center py-12  lg:py-[133px]'>
            <h1 className='text-[#FFFFFF] lg:text-[40px] font-[700] mb-[12px] '>Get Started Today With Bitcoin</h1>
            <p className='text-[14px] text-[#FFFFFF] font-[400] leading-3 mb-6'>Open account for free and start trading Bitcoins!</p>
            <button className="py-3 px-10 bg-[#fa9e1f] text-[#fff]">REGISTER NOW</button>

            </div>
           </div>
  </div>

  

</main>



    </>
    
  )
}

export default HomePage
