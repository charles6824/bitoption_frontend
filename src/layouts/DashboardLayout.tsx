import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
// import dashboard from "../assets/img/svg/dashboard.svg";
// import dispute from "../assets/img/svg/dispute.svg";
// import legal from "../assets/img/svg/legal.svg";
// import message from "../assets/img/svg/message.svg";
// import calendar from "../assets/img/svg/calendar.svg";
// import settings from "../assets/img/svg/settings.svg";
// import logout from "../assets/img/svg/logout.svg";
// import logo from "../assets/img/png/nav-logo.png";
// import notification from "../assets/img/png/notification.png";
// import profile from "../assets/img/png/profile.png";
// import arrow from "../assets/img/png/arrow-down.png";
import { FaArrowDown, FaBell, FaUser } from "react-icons/fa";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navList = [
    {
      name: "Dashboard",
      // icon: <img src={dashboard} alt="Dashboard Icon" className="w-5 h-5" />,
      url: "/dashboard",
    },
    {
      name: "Dispute Resolution",
      // icon: <img src={dispute} alt="Dispute Resolution Icon" className="w-5 h-5" />,
      url: "/dispute",
    },
    {
      name: "Legal Expert",
      // icon: <img src={legal} alt="Legal Expert Icon" className="w-5 h-5" />,
      url: "/legal",
    },
    {
      name: "Messages",
      // icon: <img src={message} alt="Messages Icon" className="w-5 h-5" />,
      url: "/messages",
    },
    {
      name: "Calendar",
      // icon: <img src={calendar} alt="Calendar Icon" className="w-5 h-5" />,
      url: "/calendar",
    },
    {
      name: "Settings",
      // icon: <img src={settings} alt="Settings Icon" className="w-5 h-5" />,
      url: "/settings",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed z-20 inset-y-0 left-0 bg-[#f5f9fa] sm:bg-sidebar-gradient shadow-custom w-[300px] transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform sm:translate-x-0 sm:relative sm:z-auto`}
      >
        <div className="p-6">
          {/* <img src={logo} alt="" width="200px" /> */}
          <h1>247BitOptions</h1>
          <nav className="mt-[90px]">
            <ul className="space-y-3">
              {navList.map((item) => (
                <li
                  key={item.name}
                  className={`flex items-center p-3 rounded-md text-[16px] font-medium ${
                    location.pathname === item.url
                      ? "bg-[#51A8B11A] text-[#3A5A5A]"
                      : "text-[#3A5A5A]"
                  }`}
                >
                  <Link to={item.url} className="flex items-center w-full">
                    {/* {item.icon} */}
                    <span className="ml-4">{item.name}</span>
                  </Link>
                </li>
              ))}

              <li className="flex items-center p-3 rounded-md text-[16px] font-medium text-[#3A5A5A] mt-[50px] cursor-pointer">
                <span className="flex items-center w-full">
                  {/* <img src={logout} alt="" className="w-5 h-5" /> */}
                  <span className="ml-4">Log Out</span>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),url(/dash_bg.jpeg)`,
        backgroundSize: "cover"
      }}>
        {/* Header */}
        <header className="bg-white px-6 py-4 flex justify-between items-center sm:hidden fixed top-0 left-0 w-full z-10">
          <button
            onClick={toggleSidebar}
            className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          
          <div className="flex justify-between items-center space-x-6">
            {/* <img src={notification} alt="" className="" /> */}
            <FaBell />
            <div className="hidden sm:flex items-center space-x-2 cursor-pointer">
              {/* <img
                src={profile}
                alt="Profile"
                className="w-8 h-8 rounded-full border border-gray-300"
              /> */}
              <FaUser />
              <span className="text-sm font-medium text-gray-700">Jennifer Balablu</span>
              {/* <img src={arrow} alt="" className="w-[20px] h-[20px]" /> */}
              <FaArrowDown />
            </div>
          </div>
        </header>

        <header className="bg-white px-[50px] py-[20px] hidden sm:flex justify-between items-center fixed top-0 left-0 sm:left-[300px] w-full sm:w-[calc(100%-300px)] z-10">
          <div>
            <h1 className="text-[24px] font-medium text-[#3A5A5A]">Good Afternoon, James</h1>
            <p className="text-[12px] text-[#3A5A5A]">Welcome Back! Let’s pick up where you left off</p>
          </div>
          <div className="flex justify-between items-center space-x-6">
            {/* <img src={notification} alt="" className="" /> */}
            <FaBell />
            <div className="hidden sm:flex items-center space-x-2 cursor-pointer">
              <FaUser />
              <span className="text-sm font-medium text-gray-700">Jennifer Balablu</span>
              {/* <img src={arrow} alt="" className="w-[20px] h-[20px]" /> */}
              <FaArrowDown />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto mt-[80px] sm:mt-[120px] px-6 sm:px-[50px]">
          <Outlet />
        </main>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
