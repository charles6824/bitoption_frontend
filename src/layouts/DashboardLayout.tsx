import { useState } from "react";
import { Link, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaAngleDown, FaArrowDown,  FaEdit,  FaUser, FaUserCircle } from "react-icons/fa";
import { MdDashboard, MdLogout, MdOutlineSettings, MdPayment } from "react-icons/md";
import { GiPayMoney } from "react-icons/gi";
import { BiTransferAlt } from "react-icons/bi";
import { LucideChartNoAxesCombined,Folder } from "lucide-react";
import { useLogoutMutation } from "../slices/baseApiSlice";
import PromptsCard from "../components/PromptsCard";
import Modal from "../components/Modal";
import LoadingBtn from "../components/LoadingBtn";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal,setShowModal] =useState(false)
  const location = useLocation();
  const navigate = useNavigate();

  const [logout, {isLoading}] =useLogoutMutation();

  const handleLogout = async() => {
    try {
			await logout({}).unwrap();
			sessionStorage.clear(); 
			navigate('/sign-in'); 
		} catch (error) {
			console.error('Logout failed:', error);
		}
  }
 
  


  const user_data: any = sessionStorage.getItem("userInfo")
  const userInfo = user_data && JSON.parse(user_data)
  const token = userInfo && userInfo.data.token;

  
  const currentTime = new Date().getHours();
  let greeting;
  if (currentTime >=5 && currentTime < 12) {
    greeting = "Good Morning";
  }else if(currentTime >=12 && currentTime < 17) {
    greeting = "Good Afternoon";
  }else if(currentTime >=17 && currentTime < 22){
    greeting = "Good Evening";
  }else {
    greeting = "Good Night";
  }

  const navList = [
    { 
      name: "Dashboard",
      // icon: <img src={dashboard} alt="Dashboard Icon" className="w-5 h-5" />,
      icon: <MdDashboard />,
      url: "/dashboard",
    },
    {
      name: "Fund Wallet",
      // icon: <img src={dispute} alt="Dispute Resolution Icon" className="w-5 h-5" />,
     icon: <GiPayMoney />,
      url: "/deposit",
    },
    {
      name: "Transfer",
      // icon: <img src={legal} alt="Legal Expert Icon" className="w-5 h-5" />,
      icon :<BiTransferAlt/>,
      url: "/transfers",
    },
    {
      name: "Investments",
      // icon: <img src={message} alt="Messages Icon" className="w-5 h-5" />,
      icon:<Folder />,
      url: "/investments",
    },
    {
      name: "Packages",
      // icon: <img src={message} alt="Messages Icon" className="w-5 h-5" />,
      icon:<LucideChartNoAxesCombined />,
      url: "/packages",
    },
    {
      name: "withdrawals",
      // icon: <img src={calendar} alt="Calendar Icon" className="w-5 h-5" />,
      icon :<MdPayment/>,
      url: "/withdrawals",
    },
    {
      name: "Settings",
      // icon: <img src={settings} alt="Settings Icon" className="w-5 h-5" />,
      icon: <MdOutlineSettings />,
      url: "/settings",
    },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    {
      token ? (
        <div className="flex h-screen bg-[#1d1d1d] overflow-hidden">
          {/* Sidebar */}
          <aside
            className={`fixed z-20 inset-y-0 left-0 bg-[#f5f9fa] sm:bg-sidebar-gradient shadow-custom w-[300px] transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform sm:translate-x-0 sm:relative sm:z-auto`}
          >
            <div className="p-6 bg-[#1d1d1d] h-full text-[#fa9e1f]">
              {/* <img src={logo} alt="" width="200px" /> */}
              <nav className="mt-[90px] ">
                <ul className="space-y-3">
                  {navList.map((item) => (
                    <li
                      key={item.name}
                      className={`flex items-center p-3 rounded-md text-[16px] font-medium ${
                        location.pathname === item.url
                          ? "bg-[#51A8B11A] text-[#fa9e1f]"
                          : "text-[#ffff]"
                      }`}
                    >
                      <Link to={item.url} className="flex items-center w-full">
                        {item.icon}
                        <span className="ml-4">{item.name}</span>
                      </Link>
                    </li>
                  ))}

                  <li className="flex items-center p-3 rounded-md text-[16px] font-medium text-[#fff] mt-[50px] cursor-pointer">
                    <span onClick={()=>setShowModal(true)} className="flex items-center w-full">
                      <MdLogout  />
                      <span className="ml-4">Log Out</span>
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1 flex flex-col overflow-hidden " style={{
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
                <div className="hidden sm:flex items-center space-x-2 cursor-pointer">
                  {/* <img
                    src={profile}
                    alt="Profile"
                    className="w-8 h-8 rounded-full border border-gray-300"
                  /> */}
                  <FaUser />
                  <span className="text-sm font-medium text-white">{userInfo.data.userDetails.fullName}</span>
                  {/* <img src={arrow} alt="" className="w-[20px] h-[20px]" /> */}
                  <FaArrowDown className="text-[#fa9e1f]" />
                </div>
              </div>
            </header>

            <header className="bg-[#1d1d1d]   px-[50px] py-[20px] hidden sm:flex justify-between items-center fixed top-0 left-0 sm:left-[300px] w-full sm:w-[calc(100%-300px)] z-10">
              <div>
                <h1 className="text-[24px] font-medium text-white">{greeting}, <span className="text-[#fa9e1f]">{userInfo.data.userDetails.fullName}</span> </h1>
                <p className="text-[12px] text-[#fff]">Welcome Back! Let’s pick up where you left off</p>
              </div>
              <div className="flex justify-between items-center space-x-6">
                {/* <img src={notification} alt="" className="" /> */}
                <div className="hidden sm:flex items-center space-x-2 cursor-pointer">
                  <span className="text-sm font-medium text-white">{userInfo.data.userDetails.fullName}</span>

                  {/* <img src={arrow} alt="" className="w-[20px] h-[20px]" /> */}
                  
                  <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="tania andrew"
          className="cursor-pointer"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      </MenuHandler>
      <MenuList placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <MenuItem className="flex items-center gap-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <FaUserCircle className="text-[#fa9e1f]"/>
 
          <Typography variant="small" className="font-medium" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem className="flex items-center gap-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
           <FaEdit className="text-[#fa9e1f]"/>
 
          <Typography 
            variant="small" 
            className="font-medium" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}>
            Edit Profile
          </Typography>
        </MenuItem>
      
       
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 " placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <MdLogout className="text-[#fa9e1f]" />
          <Typography 
            variant="small" 
            className="font-medium" 
            placeholder="" 
            onPointerEnterCapture={() => {}} 
            onPointerLeaveCapture={() => {}}>
            <span onClick={handleLogout}>

            Sign Out
            </span>
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
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


{
        showModal && (
          <Modal
							isShowCancelButton={false}
							cancelButtonFunction={() => setShowModal(false)}
						>
							<div className="p-10">
              <PromptsCard title={""}>
									<div className="p-10 flex flex-col justify-center items-center">
										<h2 className="text-2xl text-center pt-8 pb-5 font-medium text-gray-900">
											Are you sure you want to log out?
										</h2>
										<div className="mb-8 text-center">
                      {
                        isLoading ? (
                        <>
                        <LoadingBtn/>
                        </>) : (
                          <div className="flex gap-9">
                            <button onClick={()=>setShowModal(false)} className="bg-black py-2 px-7 text-white">No</button>
                            <button onClick={handleLogout} className="bg-black py-2 px-7 text-white">YES</button>

                          </div>
                        )
                      }
									</div>
									</div>
                  </PromptsCard>
							</div>
						</Modal>
        )
      }


        </div>

      ) : (
        <Navigate to="/sign-in" />
      )
    }
    </>
  );
};

export default DashboardLayout;