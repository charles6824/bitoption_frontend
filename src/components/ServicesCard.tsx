import { FaBitcoin, FaWallet } from "react-icons/fa";
import SingleCard from "./SingleCard";
import { SiEsotericsoftware } from "react-icons/si";
import { IoLogoBitcoin } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";

const ServicesCard = () => {
  return (
    <div>
      <div className="bg-[#111111] p-7 text-white grid md:grid-cols-2 gap-6 md:px-20 py-24">
        <SingleCard className="bg-[#1d1d1d] shadow-md p-6">
          <div className="flex items-center mb-7 space-x-4">
            <FaWallet className="text-[#fa9e1f] text-[40px]" />
            <h2 className="">Bitcoin Transaction</h2>
          </div>
          <p>
            Secure and lightning-fast Bitcoin transactions with low fees. Send
            and receive crypto instantly, anytime, anywhere.
          </p>
        </SingleCard>

        <SingleCard className="bg-[#1d1d1d] p-6">
          <div className="flex items-center mb-7 space-x-4">
            <FaBitcoin className="text-[#fa9e1f] text-[40px]" />
            <h2>Bitcoin Mining</h2>
          </div>
          <p>
            Earn rewards by verifying Bitcoin transactions through mining.
            Harness the power of blockchain to generate passive income.
          </p>
        </SingleCard>

        <SingleCard className="bg-[#1d1d1d] p-6">
          <div className="flex items-center mb-7 space-x-4">
            <SiEsotericsoftware className="text-[#fa9e1f] text-[40px]" />
            <h2>Software Development</h2>
          </div>
          <p>
            Custom-built blockchain and cryptocurrency software solutions to
            drive innovation and maximize efficiency in your business.
          </p>
        </SingleCard>

        <SingleCard className="bg-[#1d1d1d] p-6">
          <div className="flex items-center mb-7 space-x-4">
            <IoLogoBitcoin className="text-[#fa9e1f] text-[40px]" />
            <h2>Bitcoin Investment</h2>
          </div>
          <p>
            Grow your wealth by investing in Bitcoin. Stay ahead with real-time
            market insights and secure investment strategies.
          </p>
        </SingleCard>

        <SingleCard className="bg-[#1d1d1d] p-6">
          <div className="flex items-center mb-7 space-x-4">
            <FaWallet className="text-[#fa9e1f] text-[40px]" />
            <h2>Bitcoin Exchange</h2>
          </div>
          <p>
            Trade Bitcoin seamlessly with high liquidity and competitive rates.
            Buy, sell, and swap crypto with confidence.
          </p>
        </SingleCard>

        <SingleCard className="bg-[#1d1d1d] p-6">
          <div className="flex items-center mb-7 space-x-4">
            <GiWallet className="text-[#fa9e1f] text-[40px]" />
            <h2>Bitcoin Escrow Service</h2>
          </div>
          <p>
            Secure transactions with our escrow service. Ensure trust and safety
            when buying or selling Bitcoin online.
          </p>
        </SingleCard>
      </div>
    </div>
  );
};

export default ServicesCard;
