import { FaUserCircle } from "react-icons/fa";
import {
	useGetAccountDetailsQuery,
	useLazyNameEnquiryQuery,
} from "../../slices/accountApiSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useTransferViaWalletMutation } from "../../slices/baseApiSlice";
import checkIcon from "../../assets/images/checkIcon.png";
import { useNavigate } from "react-router-dom";
import LoadingBtn from "../../components/LoadingBtn";

const Transfer = () => {
	const navigate = useNavigate();

	const [accountNumber, setAccountNumber] = useState("");
	const [amount, setAmount] = useState(0);
	const [description, setDescription] = useState("");
	const [showName, setShowName] = useState(false);
	const [step, setStep] = useState(1);
	const { data } = useGetAccountDetailsQuery({}) as any;
	console.log("data", data);
	const user_data: any = sessionStorage.getItem("userInfo");
	const userInfo = user_data && JSON.parse(user_data);

	const accountDetails = userInfo && userInfo.data.accountDetails;

	console.log("accountDetails", accountDetails);

	const [nameEnquiry, { isLoading: nameLoading, data: nameData }] =
		useLazyNameEnquiryQuery({}) as any;

	const [transferViaWallet, { isLoading: transferLoading }] =
		useTransferViaWalletMutation();

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

			if (!amount || amount > accountDetails.balance) {
				return toast.error("Insufficient balance");
			}
			const model = {
				accountNumber: accountNumber,
				amount: amount,
				description: description,
			};

			const response: any = await transferViaWallet({
				data: { payload: model },
			}).unwrap();
			if (response.status) {
				toast.success(response.message);
				setStep((prev) => prev + 1);
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
		// Transfer
		<div className="py-2">
			<h1 className="text-[28px] mb-2">Transfer</h1>
			<p className="text-[14px]">Transfer to other Recipient</p>
			{step === 1 && (
				<div className="w-full border p-8">
					<div className="relative flex items-center w-[60%]">
						<div className="flex-1 flex justify-center items-center ">
							<div className="rounded-[15px] shadow-md w-full px-[15px] border-2 border-[#fa9e1f] md:px-[30px] py-[30px] bg-[#000]">
								<div className="flex justify-between items-center">
									<div className="flex gap-2 items-center">
										<FaUserCircle size={50} className="text-white" />

										<div>
											<p className="text-[#fa9e1f] text-nowrap whitespace-nowrap text-[11px] md:text-[13px]">
												{accountDetails.accountType}
											</p>
											<h1 className="text-[14px] text-white md:text-[16px] uppercase leading-tight">
												{accountDetails.accountNumber}
											</h1>
										</div>
									</div>
									<div className="flex flex-col text-right">
										<h1 className="text-[#EDEFF2]  text-[25px] md:text-[20px]">
											Balance: $
											{Number(accountDetails.balance).toLocaleString("en-US", {
												minimumFractionDigits: 2,
												maximumFractionDigits: 2,
											})}
										</h1>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="space-y-4 py-3">
						<div>
							<input
								type="text"
								className="w-[60%] py-3 bg-gray-50 px-4 text-[13px]  border border-[#ccc] rounded-md "
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
												className="w-[60%] py-3  text-[13px] bg-gray-50  px-3 border border-[#ccc] rounded-md "
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
								className="w-[60%] py-3 bg-gray-50 border border-[#ccc] text-[13px] px-3   rounded-md "
								placeholder="Amount"
								value={amount}
								onChange={(e) => setAmount(Number(e.target.value))}
							/>
						</div>
						<div className="relative py-2">
							<input
								type="text"
								className="w-[60%] py-3 bg-gray-50 border border-[#ccc] text-[13px] px-3  rounded-md "
								placeholder="Narration"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>
						{transferLoading ? (
							<LoadingBtn />
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
			)}

			{step === 2 && (
				<div className="shadow p-8 rounded mt-7 text-center flex flex-col space-y-4 items-center justify-center">
					<img src={checkIcon} alt="" />
					<p className="text-[25px] font-bold text-[#fa9e1f]">
						Transfer completed Successfully
					</p>
					<p className="">
						Your transfer of ${Number(amount).toLocaleString()} from {accountDetails.accountNumber} to {accountNumber} has been processed successfully
					</p>
					<button
						className="py-2 px-7 bg-[#1d1d1d] text-white border border-[#fa9e1f]"
						onClick={() => navigate("/dashboard")}
					>
						Back to Dashboard
					</button>
				</div>
			)}
		</div>
	);
};

export default Transfer;
