import { useEffect, useState } from "react";
import { useLazyNameEnquiryQuery } from "../../slices/accountApiSlice";
import { toast } from "react-toastify";
import { useFundAsAdminMutation } from "../../slices/baseApiSlice";
import LoadingBtn from "../../components/LoadingBtn";
import Modal from "../../components/Modal";
import { FaRegTimesCircle } from "react-icons/fa";
import { Tabs, TabsHeader, Tab, TabsBody } from "@material-tailwind/react";

const AdminDeposit = () => {
	const [accountNumber, setAccountNumber] = useState("");
	const [amount, setAmount] = useState(0);
	const [showName, setShowName] = useState(false);
	const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState("pending")

	const [nameEnquiry, { isLoading: nameLoading, data: nameData }] =
		useLazyNameEnquiryQuery({}) as any;

	const [fundAsAdmin, { isLoading: transferLoading }] =
		useFundAsAdminMutation();

	const data = [
		{
			label: "Pending Deposits",
			value: "pending",
		},
		{
			label: "Completed Deposits",
			value: "completed",
		},
	];

	const handleAccount = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\D/g, "");

		if (/^\d{0,11}$/.test(value)) {
			setAccountNumber(value);
			if (value.length >= 10) {
				console.log("object");
				const response: any = await nameEnquiry(value).unwrap();
				if (response.status) {
					console.log("est: ", response);
				} else {
					console.log("object");
				}
			}
		}
	};

	const handleSubmit = async () => {
		try {
			console.log("object");
			if (!accountNumber || accountNumber.length < 10) {
				return toast.error("Account Number validation failure");
			}

			if (!amount) {
				return toast.error("Amount is Required");
			}
			const model = {
				accountNumber: accountNumber,
				amount: amount,
				accountName: nameData.data,
			};

			const response: any = await fundAsAdmin({
				data: { payload: model },
			}).unwrap();
			if (response.status) {
				toast.success(response.message);
				setAccountNumber("");
				setAmount(0);
				setShowName(false);
			} else {
				toast.error(response.message);
			}
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	useEffect(() => {
		if (nameData && nameData?.status) {
			setShowName(true);
		} else {
			toast.error(nameData?.message);
		}
	}, [nameData]);

	return (
		<div className="">
			<h1 className="text-[28px]">Deposit</h1>
			<p className="text-[12px]">Fund users wallet</p>
			<div className="flex justify-end py-8">
				<button
					className=" bg-[#1d1d1d] text-white py-2 px-5 border border-[#fa9e1f]  rounded hover:bg-[#fa9e1f] transition "
					onClick={() => setShowModal(true)}
				>
					ShowModal
				</button>
			</div>

			<div className="">
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
            {activeTab === "pending" && (
              <></>
            ) }

            {activeTab === "completed" && (
              <></>
            ) }
          </TabsBody>
				</Tabs>
			</div>
			{showModal && (
				<Modal>
					<div className="p-2 w-[45%]">
						<div className="bg-white relative px-6 py-[40px] w-full">
							<div className="flex justify-start items-center">
								<div className="w-full">
									<div className="flex justify-between items-center">
										<div>
											<h1 className="text-[28px]">Fund User Wallet</h1>
											<p className="text-[12px]">
												Send Money to users within the application
											</p>
										</div>
										<FaRegTimesCircle
											size={25}
											className="text-red-500 cursor-pointer"
											onClick={() => setShowModal(false)}
										/>
									</div>

									<div className="space-y-4 py-3">
										<div>
											<label htmlFor="" className="text-[13px]">
												Account Number
											</label>
											<input
												type="text"
												className="w-[100%] py-3 bg-gray-50 px-4 text-[13px]  border border-[#ccc] rounded-md "
												placeholder="Destination account"
												value={accountNumber}
												onChange={handleAccount}
												maxLength={10}
											/>
										</div>
										<>
											{showName && (
												<>
													{nameLoading ? (
														<>
															<div className="flex justify-center items-center gap-2">
																<div className="w-16 h-16 border-[10px] border-[#fa9e1f] border-dotted rounded-full animate-spin mr-4"></div>
																<p>Loading...</p>
															</div>
														</>
													) : (
														<div className="py-3">
															<input
																type="email"
																className="w-[100%] py-3  text-[13px] bg-gray-50  px-3 border border-[#ccc] rounded-md "
																placeholder="Account name"
																value={nameData && nameData.data}
																readOnly
															/>
														</div>
													)}
												</>
											)}
										</>
										<div className="relative py-2">
											<input
												type="text"
												className="w-[100%] py-3 bg-gray-50 border border-[#ccc] text-[13px] px-3   rounded-md "
												placeholder="Amount"
												value={amount}
												onChange={(e) => setAmount(Number(e.target.value))}
											/>
										</div>

										{transferLoading ? (
											<div className="w-[30%]">
												<LoadingBtn />
											</div>
										) : (
											<button
												className=" bg-[#1d1d1d] text-white py-2 px-5 border border-[#fa9e1f]  rounded hover:bg-[#fa9e1f] transition "
												onClick={handleSubmit}
											>
												Make Transfer
											</button>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default AdminDeposit;
