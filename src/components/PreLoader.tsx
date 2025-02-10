
 import logo from "../assets/images/preloaderImg.jpg"

const PreLoader = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
    <div className="relative w-36 h-36"> 
      {/* Spinner */}
      <div className="absolute inset-0 w-full h-full border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-[#fd6035] z-0"></div> 

      {/* Image inside the spinner */}
      <img
        src={logo}
        alt="Loading..."
        className="absolute inset-2 w-32 h-32 object-cover rounded-full z-10"  
      />
    </div>
  </div>
  );
};

export default PreLoader;
