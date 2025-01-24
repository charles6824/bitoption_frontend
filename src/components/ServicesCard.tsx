import { FaBitcoin, FaWallet } from "react-icons/fa"
import SingleCard from "./SingleCard"
import { SiEsotericsoftware } from "react-icons/si";
import { IoLogoBitcoin } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";

const ServicesCard = () => {
  return (
    <div>
      <div className="bg-[#111111] p-7 text-white grid md:grid-cols-2 gap-6 md:px-20 py-24">
        <SingleCard className="bg-[#1d1d1d] shadow-md
         p-6 ">
          <div className="flex items-center mb-7 space-x-4">
            <FaWallet className="text-[#fa9e1f] text-[40px]" />
            <h2 className="">Bitcoin Transaction</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </SingleCard>
        <SingleCard className="bg-[#1d1d1d] p-6 ">
          <div className="flex items-center mb-7 space-x-4">
            <FaBitcoin className="text-[#fa9e1f] text-[40px]" />
            <h2>Bitcoin Mining
            </h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </SingleCard>
        <SingleCard className="bg-[#1d1d1d] p-6">
          <div className="flex items-center mb-7 space-x-4">
            <SiEsotericsoftware  className="text-[#fa9e1f] text-[40px]" />
            <h2>Software Development</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </SingleCard>
        <SingleCard className="bg-[#1d1d1d] p-6 ">
          <div className="flex items-center mb-7 space-x-4">
            <IoLogoBitcoin className="text-[#fa9e1f] text-[40px]" />
            <h2>Bitcoin Investment</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </SingleCard>
        <SingleCard className="bg-[#1d1d1d] p-6 ">
          <div className="flex items-center mb-7 space-x-4">
            <FaWallet className="text-[#fa9e1f] text-[40px]" />
            <h2>Bitcoin Exchange</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </SingleCard>
        <SingleCard className="bg-[#1d1d1d] p-6 ">
          <div className="flex items-center mb-7 space-x-4">
            <GiWallet className="text-[#fa9e1f] text-[40px]" />
            <h2>Bitcoin Escrow Service</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </SingleCard>
      </div>
    </div>
  )
}

export default ServicesCard
