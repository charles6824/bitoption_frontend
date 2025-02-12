import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
} from "@material-tailwind/react";
import { useState } from "react";
import { useChangePasswordMutation, useFeedbackMutation } from "../../slices/baseApiSlice";
import { toast } from "react-toastify";
import LoadingBtn from "../../components/LoadingBtn";
import Modal from "../../components/Modal";
import PromptsCard from "../../components/PromptsCard";
import { FaTimes, FaUserCircle } from "react-icons/fa";
import checkIcon from "../../assets/images/checkIcon.png"
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [oldPassword,setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [feedbackType, setFeedbackType] = useState("")
  const [message,setMessage] = useState("")
  const [showModal,setShowModal] = useState(false);
  const [changepassword,{isLoading}] = useChangePasswordMutation() as any
  const [feedback] = useFeedbackMutation()
  const user_data: any = sessionStorage.getItem("userInfo");
	const userInfo = user_data && JSON.parse(user_data);
  const details = userInfo && userInfo?.data?.userDetails
   const navigate= useNavigate();
  

  interface passwordProps{
    oldPassword: string
    newPassword: string
  }


  const handlePasswordChange =async (e:React.FormEvent)=>{
    e.preventDefault();
    const fields = { oldPassword, newPassword };

   for (const [key, value] of Object.entries(fields)) {
  if (!value) {
    toast.error(`Please enter your ${key}`);
    return;
  }
}

if (newPassword !== confirmPassword) {
  toast.error("Passwords do not match");
  return;
}
  const model: passwordProps = { oldPassword, newPassword };

    try {
      const response = await changepassword({data:{payload: model}}).unwrap();
       if(response.status){
        toast.success(response.message);
       }else{
        toast.error(response.message);
       }
      
      
    } catch (error:any) {
      toast.error(error.message);
      
    }
    
  }

  const handleFeedback =async (e:React.FormEvent)=>{
    e.preventDefault();
    if(!message){
      toast.error("message is required")
      return;
    }

    const model = {
       feedbackType,
       message
    };

    try {
      const response = await feedback({data:{payload: model}}).unwrap();
       if(response?.status){
        setShowModal(true);
       }else{
        toast.error(response.message);
       }
      
    } catch (error:any) {
      toast.error(error.message);
      
    }

  }
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
      label: "Send feedback",
      value: "sendfeedback",
    
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
      
      <div className="flex items-center gap-4 mt-4">
        <FaUserCircle className="border-2 border-[#fa9e1f] rounded-full" size={90}/>
      
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
          <div className="mt-8 border border-[#ccc] rounded-md p-5 ">
          
                <div className="py-3 text-black ">
                  <input

                  value={details.fullName}
                  readOnly
                    type="text"
                    className=" w-[50%] bg-gray-50 py-3 text-black text-[13px] px-3 border border-[#ccc] rounded-md"
                    placeholder="Enter your name"
                   
                  />
                </div>
                <div className="py-3 text-black">
                <input
                value={details.email}
                readOnly
                type="email"
                className="w-[50%] bg-gray-50 py-3 text-black text-[13px] px-3 border border-[#ccc] rounded-md"
               placeholder="Enter your email" />
             </div>
              </div>
        
        
        </>)}

        {/* change password */}

        {activeTab === "changepassword" && (<><div>
          
        <div className="w-full border p-5 mt-20">

              <form onSubmit={handlePasswordChange} className="space-y-4 text-white w-[60%] " >
                   <div>
                     <input
                     value={oldPassword}
                     onChange={(e)=>setOldPassword(e.target.value)}
                       type="text"
                       className="w-full py-3 border border-[#ccc] text-black  px-4 text-[13px]  rounded-md outline-none "
                       placeholder="Old password"
                      
                     />
                   </div>
                   <div className="">
                     <input
                       type="text"
                       value={newPassword}
                       onChange={(e)=>setNewPassword(e.target.value)}

                       className="w-full py-3 border border-[#ccc] text-black  px-4 text-[13px]  rounded-md outline-none"
                       placeholder="New password"
                     
                     />
                   </div>
                   <div className="">
                     <input
                       type="text"
                       value={confirmPassword}
                       onChange={(e)=>setConfirmPassword(e.target.value)}
                       className="w-full py-3 border border-[#ccc] text-black  px-4 text-[13px]  rounded-md outline-none"
                       placeholder="Confirm new password"
                     
                     />
                   </div>
                   {isLoading ? (<div className="w-[35%]">
                   <LoadingBtn bg="bg-gray-500"/>
                   </div>): (<>
                   
                   
                   <button  type="submit" className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 px-7 rounded-md text-white font-semibold ">
                     UPDATE 
                   </button>
                   </>)}
                
                 </form>
               </div>
          
          
          </div></>)}

         {/* Add account */}
          {/* {activeTab === "addbankaccount" && (<><div>
            <AddaccountCard/>
            
            </div></>)} */}
          {activeTab === "sendfeedback" && (<><div>
            <div className="mt-20">
          <select
            className="border border-[#ccc] p-3 w-[60%] rounded-md outline-none"
            value={feedbackType}
            onChange={(e) => setFeedbackType(e.target.value)}
          >
            <option>Feedback Type</option>
            <option value="payment">Payment </option>
            <option value="account">Account </option>
          </select>
           </div>
           {feedbackType && (
            <form onSubmit={handleFeedback} className="mt-5">
              <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
                className="border w-[60%] py-3 px-3"
                placeholder="Enter message..."
              ></textarea>
              <div className="mt-2">
                <button type="submit" className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 px-7 rounded-md text-white font-semibold">
                  Send Message
                </button>
              </div>
            </form>
          )}
     
            </div></>)}
      </TabsBody>
    </Tabs>

    {
             showModal && (
          <Modal isShowCancelButton={false}	
		        cancelButtonFunction={() => setShowModal(false)}>
		      	<div className="p-10">
              <PromptsCard title={""}> 
              <div className="shadow p-8 rounded mt-7 text-center flex flex-col space-y-4 items-center justify-center">
					<img src={checkIcon} alt="" />
					<p className="text-[25px] font-bold text-[#fa9e1f]">
          Your feedback has been sent successfully!
					</p>
					<p className="">
          We will get back to you as soon as possible.
					</p>
					<button
						className="py-2 px-7 bg-[#1d1d1d] text-white border border-[#fa9e1f]"
						onClick={() => navigate("/dashboard")}
					>
						Back to Dashboard
					</button>
				</div>
				
				<FaTimes onClick={()=>setShowModal((prev)=>!prev)}/>
									
                 </PromptsCard>
		     </div>
			</Modal>
					)}
    </div>
  )
}

export default Settings
