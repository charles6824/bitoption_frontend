import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AccountCard from "../../components/AccountCard";
import TokenInput from "../../components/TokenInput";
import checkIcon from "../../assets/images/checkIcon.png";
import { useGetAccountDetailsQuery } from "../../slices/accountApiSlice";
import {useInitiateWithdrawalMutation,useLazySendOTPQuery} from "../../slices/withdrawalSlice";
import { toast } from "react-toastify";
import LoadingBtn from "../../components/LoadingBtn";
const Withdrawal = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [amount, setAmount] = useState(0);
	const [walletID, setWalletID] = useState("");
	const [accountNumber, setAccountNumer] = useState("");
	const [accountName, setAccountName] = useState("");
	const [bankName, setBankName] = useState("");
	const [withdrawalMethod, setWithdrawalMethod] = useState("");
	const [_isTokenComplete, setIsTokenComplete] = useState(false);
	const [token, setToken] = useState<string[]>(Array(6).fill(""));
	const { data } = useGetAccountDetailsQuery({}) as any;
	const user_data: any = sessionStorage.getItem("userInfo");
	const userInfo = user_data && JSON.parse(user_data);

	const accountDetails = userInfo && userInfo.data.accountDetails;

	const [sendOTP, { isLoading: otpLoading }] = useLazySendOTPQuery();
	const [initiateWithdrawal, { isLoading: withdrawLoading }] =
		useInitiateWithdrawalMutation();

	const handleTokenComplete = (isComplete: boolean, tokens: string[]) => {
		setIsTokenComplete(isComplete);
		setToken(tokens);
	};

  console.log(_isTokenComplete)

	const handleStep = async (e: React.FormEvent) => {
		e.preventDefault();
	
		// Step 1 Validations
		if (step === 1) {
			if (!amount || amount <= 0) {
				return toast.error("Please enter a valid withdrawal amount.");
			}
	
			if (!withdrawalMethod) {
				return toast.error("Please select a withdrawal method.");
			}
	
			if (withdrawalMethod === "crypto" && !walletID) {
				return toast.error("Crypto wallet address is required.");
			}
	
			if (withdrawalMethod === "bank") {
				if (!bankName.trim()) {
					return toast.error("Bank name is required.");
				}
				if (!accountNumber.trim()) {
					return toast.error("Account number is required.");
				}
				if (!accountName.trim()) {
					return toast.error("Account name is required.");
				}
			}
	
			try {
				const response: any = await sendOTP({}).unwrap();
				if (response.status) {
					setStep(2);
					toast.success(response.message);
				} else {
					toast.error(response.message);
				}
			} catch (error: any) {
				toast.error(error?.data?.message || "An error occurred.");
			}
			try {
				const model =
					withdrawalMethod === "crypto"
						? {
								mode: withdrawalMethod,
								amount: amount,
								cryptoWallet: walletID,
								otp: token.join(""),
						  }
						: {
								mode: withdrawalMethod,
								amount: amount,
								bankDetails: {
									accountNumber: accountNumber,
									accountName: accountName,
									bankName: bankName,
								},
								otp: token.join(""),
						  };
				console.log(model);
				const response: any = await initiateWithdrawal({
					data: { payload: model },
				}).unwrap();
				if (response.status) {
					toast.success(response.message);
					setStep(3);
				} else {
					toast.error(response.message);
				}
			} catch (error: any) {
				toast.error(error?.data?.message || "An error occurred.");
			}
	
	};
	
	}
	return (
		<div className="py-2">
			<Link to="/withdrawals" className="flex items-center text-[#fa9e1f] mb-1">
				<FaArrowLeft />
				Go Back
			</Link>
			<h1 className="text-[28px]">Withdrawal</h1>
			<p className="text-[12px]">Withdraw to your crypto wallet or bank</p>

			{step < 3 && (
				<div className="shadow p-4 rounded-md border border-[#ccc] mt-3">
					<form>
						{step === 1 && (
							<div className="mt-10">
								<AccountCard cardData={accountDetails} data={data} />
								<div className="w-[60%] flex items-center border border-[#ccc] rounded-md overflow-hidden mt-5">
									<span className="px-3 py-3 bg-gray-100 text-gray-500 border-r border-[#ccc]">
										$
									</span>
									<input
										type="text"
										id="crypto"
										inputMode="numeric"
										value={amount}
										pattern="[0-9]*"
										placeholder="0.00"
										className="px-3 py-3 outline-none bg-gray-50 w-full"
										onInput={(e) => {
											const target = e.target as HTMLInputElement;
											target.value = target.value.replace(/\D/g, "");
										}}
										onChange={(e) => setAmount(Number(e.target.value))}
									/>
								</div>

								<div className="mt-5">
									<select
										className="border border-[#ccc] bg-gray-50 p-4 w-[60%] py-3 rounded-md outline-none"
										value={withdrawalMethod} 
										onChange={(e) => setWithdrawalMethod(e.target.value)}
									>
										<option>Select Account for withdrawal</option>
										<option value="bank">Bank Account</option>
										<option value="crypto">Crypto Wallet</option>
									</select>
								</div>

								{/* Conditionally render inputs based on the selected withdrawal method */}
								{withdrawalMethod === "bank" && (
									<div className="mt-5">
										<input
											type="text"
											placeholder="Bank Name"
											className=" bg-gray-50 border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none"
											value={bankName}
											onChange={(e) => setBankName(e.target.value)}
										/>
										<input
											type="text"
											placeholder="Account Number"
											className="bg-gray-50 border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none mt-3"
											value={accountNumber}
											onChange={(e) => setAccountNumer(e.target.value)}
										/>
										<input
											type="text"
											placeholder="Account Name"
											className="bg-gray-50 border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none mt-3"
											value={accountName}
											onChange={(e) => setAccountName(e.target.value)}
										/>
									</div>
								)}

								{withdrawalMethod === "crypto" && (
									<div className="mt-5">
										<input
											type="text"
											placeholder="Crypto Wallet Address"
											className="border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none"
											value={walletID}
											onChange={(e) => setWalletID(e.target.value)}
										/>
									</div>
								)}
							</div>
						)}

						{step === 2 && (
							<>
								<TokenInput onComplete={handleTokenComplete} />
							</>
						)}

						<div className="mt-5">
							{otpLoading || withdrawLoading ? (
								<>
									<LoadingBtn />
								</>
							) : (
								<button
									className="py-2 px-7 bg-[#1d1d1d] text-white border border-[#fa9e1f]"
									onClick={handleStep}
								>
									{step === 1 ? "Continue" : "Submit"}
								</button>
							)}
						</div>
					</form>
				</div>
			)}

			{step === 3 && (
				<div className="shadow p-8 rounded mt-7 text-center flex flex-col space-y-4 items-center justify-center">
					<img src={checkIcon} alt="" />
					<p className="text-[25px] font-bold text-[#fa9e1f]">
						Withdrawal Initiated Successfully
					</p>
					<p className="">
						Your request for withdrawal have been sent and you will be notified
						as soon as it is completed
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

export default Withdrawal;
