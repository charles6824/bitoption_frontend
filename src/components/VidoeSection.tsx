import { IoLogoBitcoin } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { TbMailBitcoin, TbTransactionBitcoin } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-2 ">
      {/* Text Content Section */}
      <div className="bg-[#1d1d1d] text-white  p-[69px]  md:px-24 px-5 md:w-[70%] text-center">
        <div className="flex md:flex-row flex-col items-center md:gap-7">
          <div className="flex flex-col items-center space-y-16 text-center ">
            {/* Content 1: Strong Security */}
            <div>
              <TbTransactionBitcoin className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1 className="text-lg font-semibold mt-2">Strong Security</h1>
              <p>Secure your transactions with advanced encryption.</p>
            </div>

            {/* Content 2: Global Reach */}
            <div>
              <MdPayments className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1 className="text-lg font-semibold mt-2">Global Coverage</h1>
              <p>Accept payments from anywhere in the world, in multiple currencies.</p>
            </div>

            {/* Content 3: High Liquidity */}
            <div>
              <RiMoneyDollarCircleFill className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1 className="text-lg font-semibold mt-2">High Liquidity</h1>
              <p>Instantly convert your assets into cash with our high liquidity system.</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-16 text-center mt-16 md:mt-0">
            {/* Content 4: Digital Wallets */}
            <div>
              <FaWallet className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1 className="text-lg font-semibold mt-2">Digital Wallets</h1>
              <p>Store your cryptocurrencies safely in our secure wallets.</p>
            </div>

            {/* Content 5: Email Alerts */}
            <div>
              <TbMailBitcoin className="text-[40px] text-[#fa9e1f] m-auto " />
              <h1 className="text-lg font-semibold mt-2">Instant Alerts</h1>
              <p>Receive real-time notifications for transactions and market movements.</p>
            </div>

            {/* Content 6: Crypto Transactions */}
            <div>
              <IoLogoBitcoin className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1 className="text-lg font-semibold mt-2">Cryptocurrency Transactions</h1>
              <p>Send and receive Bitcoin and other cryptocurrencies easily and securely.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full md:w-[500px] h-screen flex justify-center items-center">
        <video
          ref={videoRef}
          controls
          className="w-full h-full object-cover opacity-60  shadow-lg"
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button Overlay (Visible Only If Video Hasn't Started) */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white p-4 rounded-full"
          >
            <FaPlay className="text-4xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
