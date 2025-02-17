import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";
import { useState } from "react";
import { useChangeAdminPasswordMutation } from "../../slices/adminApiSlice";
import { toast } from "react-toastify";
import LoadingBtn from "../../components/LoadingBtn";
import Modal from "../../components/Modal";
import PromptsCard from "../../components/PromptsCard";
import { FaEye, FaEyeSlash, FaTimes, FaUserCircle } from "react-icons/fa";
import checkIcon from "../../assets/images/checkIcon.png";
import { useNavigate } from "react-router-dom";
const AdminSettings = () => {
	const [activeTab, setActiveTab] = useState("details");
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [showOldPassword, setShowOldPassword] = useState(false);
	const [showNewPassword, setShowNewPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [changePassword, { isLoading }] =
		useChangeAdminPasswordMutation() as any;

	const user_data: any = sessionStorage.getItem("userInfo");
	const userInfo = user_data && JSON.parse(user_data);
	const details = userInfo && userInfo.data?.data;

	const navigate = useNavigate();

	interface passwordProps {
		oldPassword: string;
		newPassword: string;
	}

	const handlePasswordChange = async (e: React.FormEvent) => {
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
			const response = await changePassword({
				data: { payload: model },
			}).unwrap();
			if (response.status) {
				toast.success(response.message);
				setNewPassword("");
				setOldPassword("");
				setConfirmPassword("");
			} else {
				toast.error(response.message);
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	const data = [
		{
			label: "Personal Details",
			value: "details",
		},
		{
			label: "Change password",
			value: "changepassword",
		},
	];
	const handleShowOldPassword = ()=>{
		setShowOldPassword(!showOldPassword)
	  }
	const handleShowNewPassword = ()=>{
		setShowNewPassword(!showNewPassword)
	  }
	const handleShowConfirmPassword = ()=>{
		setShowConfirmPassword(!showConfirmPassword)
	  }

	  

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
					{data.map(({ label, value }) => (
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
					{activeTab === "details" && (
						<>
							<div className="mt-10  flex-col items-center">
								<div className="flex items-center gap-4 mt-4">
									<FaUserCircle
										className="border-2 border-[#fa9e1f] rounded-full"
										size={90}
									/>
								</div>
							</div>

							{/* form */}
							<div className="mt-8 border border-[#ccc] rounded-md p-5 ">
								<div className="py-3 text-black flex flex-col">
									<label htmlFor="">FullName</label>
									<input
										value={details.fullName}
										readOnly
										type="text"
										className=" w-[50%] bg-gray-50 py-3 text-black text-[13px] px-3 border border-[#ccc] rounded-md"
										placeholder="Enter your name"
									/>
								</div>
								<div className="py-3 text-black flex flex-col">
									<label htmlFor="">Email</label>

									<input
										value={details.email}
										readOnly
										type="email"
										className="w-[50%] bg-gray-50 py-3 text-black text-[13px] px-3 border border-[#ccc] rounded-md"
										placeholder="Enter your email"
									/>
								</div>
							</div>
						</>
					)}

					{/* change password */}

					{activeTab === "changepassword" && (
						<>
							<div>
								<div className="w-full border p-5 mt-20">
									<form
										onSubmit={handlePasswordChange}
										className="space-y-4 text-white w-[60%] "
									>
										<div className="relative">
											<span onClick={handleShowOldPassword} className="absolute top-4 right-8 text-black ">
																	 {showOldPassword ?  <FaEyeSlash/> : <FaEye />}
																	</span>

   

											<input
												value={oldPassword}
												onChange={(e) => setOldPassword(e.target.value)}
												type={showOldPassword ? "text" : "password"}
												className="w-full py-3 border border-[#ccc] text-black  px-4 text-[13px]  rounded-md outline-none "
												placeholder="Old password"
											/>
										</div>
										<div className="relative">

										<span onClick={handleShowNewPassword} className="absolute top-4 right-8 text-black">
                                           {showNewPassword ?  <FaEyeSlash/> : <FaEye/>} </span>
											<input
												type={showNewPassword ? "text" : "password"}
												value={newPassword}
												onChange={(e) => setNewPassword(e.target.value)}
												className="w-full py-3 border border-[#ccc] text-black  px-4 text-[13px]  rounded-md outline-none"
												placeholder="New password"
											/>
										</div>
										<div className="relative">
										<span onClick={handleShowConfirmPassword} className="absolute top-4 right-8 text-black ">
                                            {showConfirmPassword ?  <FaEyeSlash/> : <FaEye />} </span>
											<input
												type={showConfirmPassword ? "text" : "password"}
												value={confirmPassword}
												onChange={(e) => setConfirmPassword(e.target.value)}
												className="w-full py-3 border border-[#ccc] text-black  px-4 text-[13px]  rounded-md outline-none"
												placeholder="Confirm new password"
											/>
										</div>
										{isLoading ? (
											<div className="w-[35%]">
												<LoadingBtn bg="bg-gray-500" />
											</div>
										) : (
											<>
												<button
													type="submit"
													className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 px-7 rounded-md text-white font-semibold "
												>
													UPDATE
												</button>
											</>
										)}
									</form>
								</div>
							</div>
						</>
					)}

				
				</TabsBody>
			</Tabs>

			{showModal && (
				<Modal
					isShowCancelButton={false}
					cancelButtonFunction={() => setShowModal(false)}
				>
					<div className="p-10">
						<PromptsCard title={""}>
							<div className="shadow p-8 rounded mt-7 text-center flex flex-col space-y-4 items-center justify-center">
								<img src={checkIcon} alt="" />
								<p className="text-[25px] font-bold text-[#fa9e1f]">
									Your feedback has been sent successfully!
								</p>
								<p className="">We will get back to you as soon as possible.</p>
								<button
									className="py-2 px-7 bg-[#1d1d1d] text-white border border-[#fa9e1f]"
									onClick={() => navigate("/dashboard")}
								>
									Back to Dashboard
								</button>
							</div>

							<FaTimes onClick={() => setShowModal((prev) => !prev)} />
						</PromptsCard>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default AdminSettings;
