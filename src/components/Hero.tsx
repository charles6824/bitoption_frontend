import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      image: bg1,
      text: "Welcome to Our Platform",
      subText: "Your trusted partner in growth.",
      btnText: "LEARN MORE",
    },
    {
      image: bg2,
      text: "Experience the Best Services",
      subText: "Tailored just for you.",
      btnText: "OUR PRICES",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setTypedText(""); // Reset typewriter effect
      setCharIndex(0);
    }, 7000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Typewriter effect
  useEffect(() => {
    const currentText = slides[currentIndex].text;
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex]);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: index === currentIndex ? 50 : -50 }}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            x: index === currentIndex ? 0 : -50,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`absolute top-0 left-0 w-full h-full ${
            index === currentIndex ? "z-10" : "z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 text-center px-4">
            <motion.h1
              className="text-white text-[30px] sm:text-[35px] md:text-[45px] lg:text-[50px] font-bold  "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {typedText}
            </motion.h1>
            <motion.p
              className="text-[20px] sm:text-[25px] md:text-[30px] text-white mt-2 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {slide.subText}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
             <Link
              to="/services"
               className="mt-52 px-20 md:px-6 md:py-2 py-4 text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#fa9e1f] border-2 border-[#fa9e1f] hover:bg-[#d37d38] hover:text-white"
             >
           LEARN MORE
         </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 ">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 mt-9 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
