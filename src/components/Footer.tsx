import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-black  text-white py-10 text-[15px]">
        <div className="container mx-auto px-4">
          {/* Header */}
        
  
          {/* Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 cursor-pointer">
            {/* Navigation Links */}
            <div className="uppercase text-[15px]">
              <h3 className="text-lg font-semibold mb-4 text-[#fa9e1f] ">Our Company</h3>
              <ul className="space-y-2 ">
                <li className="hover:text-[#fa9e1f]">Home</li>
                <li className="hover:text-[#fa9e1f]">About</li>
                <li className="hover:text-[#fa9e1f]">Services</li>
                <li className="hover:text-[#fa9e1f]">Contact</li>
              </ul>
            </div>
  
            {/* Help & Support */}
            <div className="uppercase">
              <h3 className="text-lg font-semibold mb-4 text-[#fa9e1f]">Help & Support</h3>
              <ul className="space-y-2">
                <Link className="hover:text-[#fa9e1f]" to="/contact">Contact Us</Link>
                <div className="flex flex-col space-y-3">

                <Link className="hover:text-[#fa9e1f]"  to="/sign-up">Register</Link>
                <Link className="hover:text-[#fa9e1f]" to="/sign-in">Login</Link>
                </div>
                <li className="hover:text-[#fa9e1f]">Coming Soon</li>
              </ul>
            </div>
  
            {/* Contact Information */}
            <div className="uppercase">
              <h3 className="text-lg font-semibold mb-4 text-[#fa9e1f]">Contact</h3>
              <ul className="space-y-2">
                <li className="hover:text-[#fa9e1f]">Email: support@247Bitoption.com</li>
                <li className="hover:text-[#fa9e1f]">Phone: +12136309890 </li>
                <li className="hover:text-[#fa9e1f]">Address: 906 S. Francisco Street.Los Angeles</li>
                <li className="hover:text-[#fa9e1f]">Hours: Mon-Sat 08am ⇾ 05pm</li>
              </ul>
            </div>
  
            {/* Stats */}
            <div className="uppercase">
              <h3 className="text-lg font-semibold mb-4 text-[#fa9e1f]" >Stats</h3>
              <ul className="space-y-2 ">
                <li>
                  <strong className="text-[#fa9e1f]">$198.76B</strong> Market Cap
                </li>
                <li>
                  <strong className="text-[#fa9e1f]">243K</strong> Daily Transactions
                </li>
                <li>
                  <strong className="text-[#fa9e1f]">369K</strong> Active Accounts
                </li>
                <li>
                  <strong className="text-[#fa9e1f]" >127</strong> Supported Countries
                </li>
              </ul>
            </div>
          </div>
  
          {/* Payment Methods */}
          
  
          {/* Footer Bottom */}
          <div className="mt-10 text-center text-sm text-gray-400  border-t border-t-gray-500">
            &copy; 247bitoption. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  