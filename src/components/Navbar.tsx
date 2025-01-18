import { Link } from "react-router-dom"
import logo from  "../assets/images/logo-dark.png"
import { FaUser, FaUserPlus } from "react-icons/fa";
import { TfiAngleDown } from "react-icons/tfi";


const Navbar = () => {
  return (
    <>
    <nav className="bg-[#1d1d1d] px-[5%] py-5 text-[#FFF] flex justify-between ">
        <img src={logo} alt="" className="h-11" />
        <div className="flex items-center space-x-7 text-[13px]">
            <div>
                <h1 className="font-bold">9,450 USD</h1>
                <p className="text-[#b4a7a1]">last trade price</p>
            </div>
            <div>
            <h1  className="font-bold">+5.26%</h1>
             <p className="text-[#b4a7a1]">24 hour price</p>

            </div>
            <div>
            <h1 className="font-bold">12.820 BTC</h1>
            <p  className="text-[#b4a7a1]">24 hour volume</p>
            </div>
            <div>
            <h1 className="font-bold">2,231,775</h1>
            <p  className="text-[#b4a7a1]">active traders</p>
            </div>
            <div>
              <h1 className="font-bold">56456</h1>
              <p className="text-[#b4a7a1]">Live Bitcoin price</p>
            </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link to ="" className="border border-[#d37d38] py-3 px-5 flex items-center text-[#d37d38] font-bold "><FaUser className="text-[#d37d38]" />SIGN IN</Link>
          <Link to =""  className="bg-[#d37d38] py-3 px-7 flex items-center "><FaUserPlus />REGISTER</Link>
        </div>
    </nav>

    <div className="bg-black text-white p-5 ">
      <ul className="flex items-center justify-center space-x-5">
        <li className="space-x-7 text-center text-[14px] font-[600px]"><Link to="">HOME</Link></li>
        <li className="space-x-7 text-center text-[14px] font-[600px]"><Link to="">ABOUTUS</Link> </li>
        <li className="space-x-7 text-center text-[14px] font-[600px]"><Link to="">SERVICES</Link> </li>
        <li className="space-x-7 text-center text-[14px] font-[600px]"><Link to="">PRICING</Link> </li>
        <li className="space-x-7 text-center text-[14px] font-[600px] group relative "><Link className="flex items-center" to="">BLOG</Link>
        
         </li>
        <li className="space-x-7 text-center text-[14px] font-[600px]"><Link to="">PAGES</Link> </li>
        <li className="space-x-7 text-center text-[14px] font-[600px]"><Link to="">CONTACT</Link> </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar


