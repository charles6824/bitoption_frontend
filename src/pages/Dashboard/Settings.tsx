import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
} from "@material-tailwind/react";
import { useState } from "react";
import AddaccountCard from "../../components/AddaccountCard";
const Settings = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [withdrawalMethod, setWithdrawalMethod] = useState("");
  const data = [

    {
      label: "Personal Details",
      value: "details",
    
    },
    {
      label: "Change password",
      value:"changepassword",
    
    },
    {

      label: "Add Bank Account",
      value: "addbankaccount",
     
    },
    {
      label: "Send feedback",
      value: "sendfeedback",
    
    },
    {
      label: "Set Limit",
      value: "setlimit",
    
    },
   
   
  ];


  const [image, setImage] = useState("/default-profile.png"); 

  interface ImageChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleImageChange = (event: ImageChangeEvent): void => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("profile-input")?.click(); 
  };
  return (
    <div>
{/* Tab */}
   <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-[#fa9e1f] shadow-none rounded-none",
        }}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {data.map(({ label,value}) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-gray-900" : ""}
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody 
        animate={{ mount: { opacity: 1 }, unmount: { opacity: 0 } }}
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >

        {activeTab === "details" && (<>
          <div className="mt-10  flex-col items-center">
      <h1 className="text-lg font-semibold">Your Profile Photo</h1>
      <div className="flex items-center gap-4 mt-4">
        <label htmlFor="profile-input" className="cursor-pointer">
          <img
            src={image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
          />
        </label>
        <button
          onClick={handleButtonClick}
          className="bg-[#1d1d1d] border font-light border-[#fa9e1f] text-white px-2 py-1 mt-8 rounded-lg "
        >
          Upload
        </button>
      </div>
      <input
        type="file"
        id="profile-input"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>

      {/* form */}
          <div className="mt-8 border border-[#ccc] rounded-md">
          <form className="space-y-4 text-white p-5">
                <div>
                  <input
                    type="text"
                    className="w-[60%] py-3  px-4 text-[13px]  border border-[#ccc] rounded-md "
                    placeholder="Enter your name"
                   
                  />
                </div>
                <div className="py-3">
                  <input
                    type="email"
                    className="w-[60%] py-3  text-[13px]  px-3 border border-[#ccc] rounded-md "
                    placeholder="Enter your email"
                  
                  />
                </div>
                <div className="relative">
                  <input
                    type="text" 
                    className="w-[60%] py-3 bg-gray-50 border border-[#ccc] text-[13px] px-3   rounded-md "
                    placeholder="Enter your password"
                  />
                 
                </div>
      
                <button className=" bg-[#1d1d1d] text-white py-2 px-5 border border-[#fa9e1f]  rounded hover:bg-[#fa9e1f] transition ">
                  UPDATE
                </button>
              </form>
              </div>
        
        
        </>)}

        {/* change password */}

        {activeTab === "changepassword" && (<><div>
          
        <div className="w-full border p-5 mt-20">

              <form className="space-y-4 text-white  w-[60%] " >
                   <div>
                     <input
                       type="text"
                       className="w-full py-3 border border-[#ccc] text-black  px-4 text-[13px]  rounded-md outline-none "
                       placeholder="Old password"
                      
                     />
                   </div>
                   <div className="">
                     <input
                       type="email"
                       className="w-full py-3 border border-[#ccc] text-black  px-4 text-[13px]  rounded-md outline-none"
                       placeholder="New password"
                     
                     />
                   </div>
                   <div className="">
                     <input
                       type="email"
                       className="w-full py-3 border border-[#ccc] text-black  px-4 text-[13px]  rounded-md outline-none"
                       placeholder="Confirm new password"
                     
                     />
                   </div>
                
                   <button className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 px-7 rounded-md text-white font-semibold ">
                     UPDATE 
                   </button>
                 </form>
               </div>
          
          
          </div></>)}

         {/* Add account */}
          {activeTab === "addbankaccount" && (<><div>
            <AddaccountCard/>
            
            </div></>)}
          {activeTab === "sendfeedback" && (<><div>
            <div className="mt-20">
          <select
            className="border border-[#ccc] p-3 w-[60%] rounded-md outline-none"
            value={withdrawalMethod}
            onChange={(e) => setWithdrawalMethod(e.target.value)}
          >
            <option>Feedback Type</option>
            <option value="payment">Payment Issues</option>
            <option value="account">Account Issues</option>
          </select>
           </div>
           {withdrawalMethod && (
            <form className="mt-5">
              <textarea
                className="border w-[60%] py-3 px-3"
                placeholder="Enter message..."
              ></textarea>
              <div className="mt-2">
                <button className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 px-7 rounded-md text-white font-semibold">
                  Send Message
                </button>
              </div>
            </form>
          )}

                
            </div></>)}

            {/* setlimit */}
          {activeTab === "setLimit" && (<><div>
            hello Limit
            
            </div></>)}
        
      </TabsBody>
    </Tabs>
    </div>
  )
}

export default Settings
