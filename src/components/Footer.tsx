const Footer = () => {
    return (
      <footer className="bg-black  text-white py-10 text-[15px]">
        <div className="container mx-auto px-4">
          {/* Header */}
        
  
          {/* Footer Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Navigation Links */}
            <div className="uppercase text-[15px]">
              <h3 className="text-lg font-semibold mb-4 text-[#fa9e1f]">Our Company</h3>
              <ul className="space-y-2">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
  
            {/* Help & Support */}
            <div className="uppercase">
              <h3 className="text-lg font-semibold mb-4 text-[#fa9e1f]">Help & Support</h3>
              <ul className="space-y-2">
                <li>Contact Us</li>
                <li>FAQ</li>
                <li>Terms of Services</li>
                <li>Register</li>
                <li>Login</li>
                <li>Coming Soon</li>
              </ul>
            </div>
  
            {/* Contact Information */}
            <div className="uppercase">
              <h3 className="text-lg font-semibold mb-4 text-[#fa9e1f]">Contact</h3>
              <ul className="space-y-2">
                <li>Email: contact@website.com</li>
                <li>Phone: 00216 21 184 010</li>
                <li>Address: London, England</li>
                <li>Hours: Mon-Sat 08am ⇾ 05pm</li>
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
          <div className="mt-10 text-center text-sm text-gray-400">
            &copy; 247bitoption. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  