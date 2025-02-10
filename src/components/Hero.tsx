import { useState, useEffect } from "react";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";


const Hero = () => {
  const slides = [
    {
      image: bg1,
      text: (
        <div className="text-center px-4">
          <h1 className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] font-bold leading-tight uppercase">
            Welcome to{" "}
            <span className="text-[#fa9e1f] font-bold">
              Our Platform
            </span>
          </h1>
          <p className="text-[20px] sm:text-[25px] md:text-[30px] leading-normal mt-2">
            Your trusted partner in growth.
          </p>

          <button
            className="mt-8 px-20 md:px-6 md:py-2 py-4 text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#fa9e1f] border-2 border-[#fa9e1f] hover:bg-[#d37d38]  hover:text-white"
          >
            LEARN MORE
          </button>
        </div>
      ),
    },
    {
      image: bg2,
      text: (
        <div className="text-center px-4">
          <h1 className="text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] font-bold leading-tight uppercase">
            Experience the{" "}
            <span className="text-[#fa9e1f] font-bold">
              Best Services
            </span>
          </h1>
          <p className="text-[20px] sm:text-[25px] md:text-[30px] leading-normal mt-2">
            Tailored just for you.
          </p>
          <button
            className="mt-8 md:px-8 px-20 md:py-2 py-4 text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#fa9e1f] border-2 border-[#fa9e1f] hover:bg-[#d37d38]  hover:text-white "
          >
            OUR PRICES
          </button>
        </div>
      ),
    },
  ];
  

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNavigation = (index: number) => {
    setCurrentIndex(index);
  };

  return (

    <>

       
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden m">
      {/* Image and Text Display */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-center px-4">
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-relaxed">
              {slide.text}
            </h1>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
    </>
  );
};

export default Hero;
