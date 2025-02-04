import hero from "../assets/images/bg-banner.jpg"
import ServicesCard from "../components/ServicesCard"

const Services = () => {
  return (

    /* HERO SERVICES*/
    <div>
         <div className="w-full h-auto bg-cover bg-center py-12 md:py-20"
    style={{
      background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${hero})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="flex flex-col justify-between items-center">
       <h1 className="md:text-[60px] text-[40px] text-white font-bold">OUR <span className="text-[#fa9e1f]">SERVICES</span></h1>
       <hr className="text-[#fa9e1f] w-24" />
    </div>
  </div>


<ServicesCard/>




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

export default Services
