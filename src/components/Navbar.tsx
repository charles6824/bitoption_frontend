import { Link } from "react-router-dom";
import logo from "../assets/images/logo-dark.png";
import { FaTimes, FaUser, FaUserPlus } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden bg-[#1d1d1d] px-[5%] py-5 text-[#FFF] md:flex justify-between">
        <img src={logo} alt="" className="h-11" />
        <div className="flex items-center space-x-7 text-[13px]">
          <div>
            <h1 className="font-bold">9,450 USD</h1>
            <p className="text-[#b4a7a1]">last trade price</p>
          </div>
          <div>
            <h1 className="font-bold">+5.26%</h1>
            <p className="text-[#b4a7a1]">24 hour price</p>
          </div>
          <div>
            <h1 className="font-bold">12.820 BTC</h1>
            <p className="text-[#b4a7a1]">24 hour volume</p>
          </div>
          <div>
            <h1 className="font-bold">2,231,775</h1>
            <p className="text-[#b4a7a1]">active traders</p>
          </div>
          <div>
            <h1 className="font-bold">56456</h1>
            <p className="text-[#b4a7a1]">Live Bitcoin price</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="/sign-in"
            className="border border-[#d37d38] py-3 px-4  flex items-center text-[#d37d38] font-bold"
          >
            <FaUser className="text-[#d37d38]" />
            SIGN IN
          </Link>
          <Link
            to="/sign-up"
            className="bg-[#d37d38] py-3 px-7 flex items-center"
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
            <Link to="/">HOME</Link>
          </li>
          <li className="text-center text-[14px] font-bold">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="text-center text-[14px] font-bold">
            <Link to="/services">SERVICES</Link>
          </li>
          <li className="text-center text-[14px] font-bold">
            <Link to="">PRICING</Link>
          </li>
          <li className="text-center text-[14px] font-bold">
            <Link to="">BLOG</Link>
          </li>
          <li className="text-center text-[14px] font-bold">
            <Link to="">PAGES</Link>
          </li>
          <li className="text-center text-[14px] font-bold">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden items-center bg-black py-4">
        <div className="flex justify-between items-center space-x-5 px-5">
          <img src={logo} alt="" className="h-8" />
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
            className="border border-[#d37d38] py-3 px-7  flex items-center text-[#d37d38] font-bold"
          >
            <FaUser className="text-[#fa9e1f]" />
            SIGN IN
          </Link>
          <Link
            to="/sign-up"
            className="bg-[#d37d38] py-3 px-7 flex text-white items-center"
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
            <FaTimes className="text-[25px]" />
          </div>
          <nav className="flex flex-col items-start p-9 space-y-5 mt-4">
            <Link
              to="#"
              className="text-lg font-medium text-white "
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-lg font-medium text-white "
            >
              About
            </Link>
            <Link
              to="#"
              className="text-lg font-medium text-white "
            >
              Services
            </Link>
            <Link
              to="#"
              className="text-lg font-medium text-white "
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
