import { IoLogoBitcoin } from "react-icons/io5";
import { MdPayments } from "react-icons/md";
import { TbMailBitcoin, TbTransactionBitcoin } from "react-icons/tb";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";

const VidoeSection = () => {
  return (
    <div className="md:flex items-center gap-8  ">
      <div className="bg-[#1d1d1d] text-white py-5 md:px-24 px-5 md:w-[70%] text-center ">
        <div className="flex md:flex-row flex-col items-center md:gap-7">
          <div className="flex flex-col items-center space-y-16 text-center">
            {/* Content 1: Strong Security */}
            <div>
              <TbTransactionBitcoin className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1>Strong Security</h1>
              <p>Secure your transactions with advanced encryption.</p>
              <p>Protection against DDoS attacks ensures uninterrupted services.</p>  
            </div>

            {/* Content 2: Global Reach */}
            <div>
              <MdPayments className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1>Global Coverage</h1>
              <p>Accept payments from anywhere in the world, in multiple currencies.</p>
              <p>Access seamless cross-border transactions with low fees.</p>
            </div>

            {/* Content 3: High Liquidity */}
            <div>
              <RiMoneyDollarCircleFill className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1>High Liquidity</h1>
              <p>Instantly convert your assets into cash with our high liquidity system.</p>
              <p>Get access to the most competitive exchange rates.</p>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-16 text-center mt-16 md:mt-0 ">
            {/* Content 4: Digital Wallets */}
            <div>
              <FaWallet className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1>Digital Wallets</h1>
              <p>Store your cryptocurrencies safely in our secure wallets.</p>
              <p>Access your funds anytime, anywhere, with ease.</p>
            </div>

            {/* Content 5: Email Alerts */}
            <div>
              <TbMailBitcoin className="text-[40px] text-[#fa9e1f] m-auto " />
              <h1>Instant Alerts</h1>
              <p>Receive real-time notifications for transactions and market movements.</p>
              <p>Stay informed with personalized email updates.</p>
            </div>

            {/* Content 6: Crypto Transactions */}
            <div>
              <IoLogoBitcoin className="text-[40px] text-[#fa9e1f] m-auto" />
              <h1>Cryptocurrency Transactions</h1>
              <p>Send and receive Bitcoin and other cryptocurrencies easily and securely.</p>
              <p>Track all your crypto transactions in one place.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="flex md:flex-row items-center justify-center p-4">
        <video
          src="/path-to-your-video.mp4"
          controls
          className="md:w-[400px] h-auto rounded-lg shadow-lg"
        ></video>
      </div>
    </div>
  );
};

export default VidoeSection;
