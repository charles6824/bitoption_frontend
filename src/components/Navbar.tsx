import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaUser, FaUserPlus } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { useFetchBitcoinDetailsQuery } from "../slices/baseApiSlice";
import logo from "../assets/images/247.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  const { data: bitcoinPrice } = useFetchBitcoinDetailsQuery(undefined, {
    pollingInterval: 60000, // 5 minutes (300,000 ms)
  }) as any;
  const activeStyle = ({isActive}: {isActive: boolean}) => isActive ? "text-[#d37d38]" : "text-white"

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden bg-[#1d1d1d] px-[5%] py-5 text-[#FFF] md:flex justify-between">
        <h1 className="text-[30px] ">247bit<span className="text-[#fa9e1f] text-[30px] italic">option</span> </h1>
        <div className="flex items-center space-x-7 text-[13px]">
          <div>
            <h1 className="font-bold ">${bitcoinPrice?.lastTradePrice} USD</h1>
            <p className="text-[#b4a7a1]">last trade price</p>
          </div>
          <div>
            <h1 className="font-bold">{bitcoinPrice?.priceChange24h}%</h1>
            <p className="text-[#b4a7a1]">24 hour price</p>
          </div>
          <div>
            <h1 className="font-bold">{bitcoinPrice?.volume24h} BTC</h1>
            <p className="text-[#b4a7a1]">24 hour volume</p>
          </div>
          <div>
            <h1 className="font-bold">{bitcoinPrice?.activeTraders}</h1>
            <p className="text-[#b4a7a1]">active traders</p>
          </div>
          <div>
            <h1 className="font-bold">${bitcoinPrice?.livePrice}</h1>
            <p className="text-[#b4a7a1]">Live Bitcoin price</p>
          </div>
        </div>
       
        <div className="flex items-center space-x-4">
          <Link
            to="/sign-in"
            className="border border-[#fa9e1f] hover:border-[#d37d38]  py-3 px-4  flex items-center text-[#fa9e1f] font-bold"
          >
            <FaUser className="text-[#fa9e1f] " />
            SIGN IN
          </Link>
          <Link
            to="/sign-up"
            className="bg-[#fa9e1f] hover:bg-[#d37d38] py-3 px-7 flex items-center"
          >
            <FaUserPlus />
            REGISTER
          </Link>
        </div>
      </nav>

      {/* Desktop Navigation Links */}
      <div className="hidden md:block bg-black text-white p-5">
        <ul className="flex items-center justify-center space-x-5">
          <li className="text-center text-[14px] font-bold">
            <NavLink className={activeStyle} to="/">HOME</NavLink>
          </li>
          <li className="text-center text-[14px] font-bold">
            <NavLink className={activeStyle} to="/about">ABOUT</NavLink>
          </li>
          <li className="text-center text-[14px] font-bold">
            <NavLink className={activeStyle} to="/services">SERVICES</NavLink>
          </li>
        
          <li className="text-center text-[14px] font-bold">
            <NavLink className={activeStyle} to="/contact">CONTACT</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden items-center bg-black py-4">
        <div className="flex justify-between items-center space-x-5 px-5">
        <h1 className="text-[20px] text-white">247bit<span className="text-[#fa9e1f] text-[30px] italic">option</span> </h1>
          <div className="bg-[#fa9e1f] p-3">
            <CiMenuFries
              onClick={toggleOffcanvas}
              className="text-white text-[30px]"
            />
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex  items-center mt-7  w-full justify-center gap-5 ">
        <Link
            to="/sign-in"
            className="border border-[#fa9e1f] py-3 px-7  flex items-center text-[#fa9e1f] font-bold"
          >
            <FaUser className="text-[#fa9e1f]" />
            SIGN IN
          </Link>
          <Link
            to="/sign-up"
            className="bg-[#fa9e1f] py-3 px-7 flex text-white items-center"
          >
            <FaUserPlus />
            REGISTER
          </Link>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleOffcanvas}
          ></div>
        )}

        {/* Offcanvas menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black text-[#fff] shadow-lg z-50 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="float-right p-6" onClick={toggleOffcanvas}>
            <FaTimes className="text-[25px] text-[#fa9e1f] "  />
          </div>
          <nav className="flex flex-col items-start p-9 space-y-5 mt-4 ">
            <Link
              to="/"
              className="text-lg font-medium text-white hover:text-[#d37d38]  "
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-white hover:text-[#d37d38] "
            >
              About
            </Link>
            <Link
              to="/services"  
              className="text-lg font-medium text-white hover:text-[#d37d38] "
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-white hover:text-[#d37d38]"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
