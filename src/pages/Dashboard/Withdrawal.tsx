import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import AccountCard from "../../components/AccountCard";
import TokenInput from "../../components/TokenInput";
import checkIcon from "../../assets/images/checkIcon.png";
import { useGetAccountDetailsQuery } from "../../slices/accountApiSlice";
import {
	useInitiateWithdrawalMutation,
	useLazySendOTPQuery,
} from "../../slices/withdrawalSlice";
import { toast } from "react-toastify";
import LoadingBtn from "../../components/LoadingBtn";
import BackButton from "../../components/BackButton";
const Withdrawal = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [amount, setAmount] = useState(0);
	const [walletID, setWalletID] = useState("");
	const [accountNumber, setAccountNumer] = useState("");
	const [accountName, setAccountName] = useState("");
	const [bankName, setBankName] = useState("");
	const [routingNumber, setRoutingNumber] = useState("");
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

	console.log(_isTokenComplete);

	const [banks, setBanks] = useState<any>([]);
	

	useEffect(() => {
		const fetchBanks = async () => {
			try {
				const response = await fetch(
					"https://banks.data.fdic.gov/api/institutions?filters=&fields=NAME,ID&limit=1000&format=json"
				);
				const data = await response.json();
				const bankList = data.data.map((bank: any) => ({
					ID: bank.data.ID,
					NAME: bank.data.NAME,
				}));
				setBanks(bankList);
			} catch (error) {
				console.error("Error fetching bank data:", error);
			}
		};

		fetchBanks();
	}, []);

	const handleStep = async (e: React.FormEvent) => {
		e.preventDefault();
		const field = { accountName, accountNumber, routingNumber, bankName };

		try {
			
			if (step < 2) {
				const response: any = await sendOTP({}).unwrap();
				if (response.status) {
					setStep(step + 1);
					toast.success(response.message);
				} else {
					toast.error(response.message);
				}
			} else {
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
                  routing: routingNumber,
								},
								otp: token.join(""),
						  };
				console.log(model);
				const response: any = await initiateWithdrawal({
					data: { payload: model },
				}).unwrap();
				if (response.status) {
					toast.success(response.message);
					setStep((prev) => prev + 1);
				} else {
					toast.error(response.message);
				}
			}
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return (
		<div className="py-2">
			<BackButton/>
			<h1 className="text-[28px]">Withdrawal</h1>
			<p className="text-[12px]">Withdraw to your crypto wallet or bank</p>

			{step < 3 && (
				<div className="shadow p-4 rounded-md border border-[#ccc] mt-3">
					<form>
						{step === 1 && (
							<div className="mt-10">
								<AccountCard cardData={accountDetails} data={data} />
								<div className="w-full md:w-[60%] flex items-center border border-[#ccc] rounded-md overflow-hidden mt-5">
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
										className="border border-[#ccc] bg-gray-50 p-4 w-full md:w-[60%] py-3 rounded-md outline-none"
										value={withdrawalMethod} // Bind to state
										onChange={(e) => setWithdrawalMethod(e.target.value)} // Update state
									>
										<option>Select Account for withdrawal</option>
										<option value="bank">Bank Account</option>
										<option value="crypto">Crypto Wallet</option>
									</select>
								</div>

								{/* Conditionally render inputs based on the selected withdrawal method */}
								{withdrawalMethod === "bank" && (
									<div className="mt-5">
										<select
											id="bankSelect"
											className="bg-gray-50 border border-[#ccc] p-4 w-full md:w-[60%] py-3 rounded-md outline-none "
											value={bankName}
											onChange={(e) => setBankName(e.target.value)}
										>
											<option>Select a bank</option>
											{banks.sort((x: any, y: any) => x.NAME.localeCompare(y.NAME)).map((bank: any) => (
												<option key={bank.ID} value={bank.NAME}>
													{bank.NAME}
												</option>
											))}
										</select>
										<input
											type="text"
											placeholder="Account Number"
											className="bg-gray-50 border border-[#ccc] p-4 w-full md:w-[60%] py-3 rounded-md outline-none mt-3"
											value={accountNumber}
											onChange={(e) => setAccountNumer(e.target.value)}
										/>
										<input
											type="text"
											placeholder="Account Name"
											className="bg-gray-50 border border-[#ccc] p-4 w-full md:w-[60%] py-3 rounded-md outline-none mt-3"
											value={accountName}
											onChange={(e) => setAccountName(e.target.value)}
										/>
										<input
											type="text"
											placeholder="Routing Number"
											className="bg-gray-50 border border-[#ccc] p-4 w-full md:w-[60%] py-3 rounded-md outline-none mt-3"
											value={routingNumber}
											onChange={(e) => setRoutingNumber(e.target.value)}
										/>
									</div>
								)}

								{withdrawalMethod === "crypto" && (
									<div className="mt-5">
										<input
											type="text"
											placeholder="Crypto Wallet Address"
											className="border border-[#ccc] p-4 w-full md:w-[60%] py-3 rounded-md outline-none"
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
								<div className="w-[50%] md:w-[25%]">
									<LoadingBtn bg="bg-gray-500" />
								</div>
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
