import { useState } from "react";
import { toast } from "react-toastify";
import { useFundWithCryptoMutation } from "../../slices/baseApiSlice";
import LoadingBtn from "../../components/LoadingBtn";
import checkIcon from "../../assets/images/checkIcon.png";
import { useNavigate } from "react-router-dom";

const Deposit = () => {
	const navigate = useNavigate();
	const [activeState, setActiveState] = useState("crypto");
	const [step, setStep] = useState(1);
	const [amount, setAmount] = useState(0);
	const [narration, setNarration] = useState("");

	const [fundWithCrypto, { isLoading: cryptoLoading }] =
		useFundWithCryptoMutation();

	const handleStep = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (step < 2) {
				if (!amount || amount < 1) {
					return toast.error("Invalid Amount");
				}
				setStep((prev) => prev + 1);
			} else {
				const model = {
					amount: amount,
					narration: narration,
				};
				const response: any = await fundWithCrypto({
					data: { payload: model },
				}).unwrap();
				console.log("response: ", response);
				if (response.data.status) {
					toast.success(response.data.message);
					setStep((prev) => prev + 1)
				} else {
					toast.error(response.data.message);
				}
			}
		} catch (error: any) {
			toast.error(error.error.data.message);
		}
	};

	return (
		<div>
			<h1 className="text-[28px]">Deposit</h1>
			<p className="text-[12px]">Fund your wallet with crypto or PayPal</p>

			{/* Toggle Buttons */}
			<div className="w-full my-[30px] flex justify-between items-center gap-[15px] pt-2">
				{/* Crypto Option */}
				<div
					onClick={() => {
						setActiveState("crypto");
						setStep(1);
					}}
					className={`w-[100%] h-[50px] flex justify-start items-center gap-[15px] cursor-pointer border-[0.5px] border-[#9CA7B8] rounded-[5px] px-4 ${
						activeState === "crypto" ? "bg-[#EFF3FE]" : ""
					}`}
				>
					<div
						className={`w-[20px] h-[20px] rounded-full border-2 ${
							activeState === "crypto" ? "border-[#fa9e1f]" : "border-[#9CA7B8]"
						}`}
					>
						{activeState === "crypto" && (
							<div className="w-[10px] h-[10px] rounded-full bg-[#1d1d1d] border-[1px] border-[#1d1d1d] m-[3px]"></div>
						)}
					</div>
					<p className="text-[14px] font-normal text-[#3E4652]">
						Fund with crypto
					</p>
				</div>

				{/* PayPal Option */}
				<div
					onClick={() => {
						setActiveState("paypal");
						setStep(1);
					}}
					className={`w-[100%] h-[50px] flex justify-start items-center gap-[15px] cursor-pointer border-[0.5px] border-[#9CA7B8] rounded-[5px] px-4 ${
						activeState === "paypal" ? "bg-[#EFF3FE]" : ""
					}`}
				>
					<div
						className={`w-[20px] h-[20px] rounded-full border-2 ${
							activeState === "paypal" ? "border-[#fa9e1f]" : "border-[#9CA7B8]"
						}`}
					>
						{activeState === "paypal" && (
							<div className="w-[10px] h-[10px] rounded-full bg-[#1d1d1d] border-[1px] border-[#1d1d1d] m-[3px]"></div>
						)}
					</div>
					<p className="text-[14px] font-normal text-[#3E4652]">
						Fund with Paypal
					</p>
				</div>
			</div>
			{step < 3 && (
				<>
					{activeState === "crypto" && (
						<div className="shadow p-4 rounded-md border-[0.5px] border-[#ccc]">
							<form onSubmit={handleStep}  className="space-y-6">
								{/* Step 1: Amount & Narration */}
								{step === 1 && (
									<div className="space-y-6">
										<div className="flex flex-col space-y-2">
											{/* input with inside border */}

											<div className=" w-[60%] flex items-center border border-[#ccc] rounded-md overflow-hidden">
												<span className="px-3 py-3 bg-gray-100 text-gray-500 border-r border-[#ccc]">
													$
												</span>
												<input
													type="text"
													id="crypto"
													inputMode="numeric"
													pattern="[0-9]*"
													placeholder="0.00"
													className="px-3 py-3 outline-none bg-gray-50 w-full"
													onInput={(e) => {
														const target = e.target as HTMLInputElement;
														target.value = target.value.replace(/\D/g, "");
													}}
													value={amount}
													onChange={(e) => setAmount(Number(e.target.value))}
												/>
											</div>
										</div>

										<div className="flex flex-col space-y-2">
											<input
												type="text"
												className="border border-[#ccc] bg-gray-50 p-4 w-[60%] py-3 rounded-md outline-none"
												placeholder="Enter your Narration here..."
												value={narration}
												onChange={(e) => setNarration(e.target.value)}
											/>
										</div>
									</div>
								)}

								{/* Step 2: Confirm Transaction */}
								{step === 2 && (
									<div className="w-[90%] px-6 py-3">
										<p className="text-gray-600">
											To initiate funding, please transfer{" "}
											<span className="font-bold text-lg text-black">
												${amount}.00
											</span>{" "}
											to the provided cryptocurrency wallet. Once completed,
											click the 'I've Sent the Amount' button to confirm. Our
											system will promptly process your fee, and the funds will
											be credited to your wallet immediately
										</p>

										<div className="mt-4">
											<h2 className="text-gray-700 font-semibold text-[25px] pb-4">
												Wallet Address{" "}
											</h2>

											<ol className="space-y-2">
												<li>
													<strong>Bitcoin (BTC) address: </strong>{" "}
													3Fz1tTPxP5jV5QYJzjR9vz5X7WZ1
												</li>
												<li>
													<strong>Ethereum (ETH) address: </strong>{" "}
													0x742d35Cc6634C0532925a3b844Bc454e4438f4
												</li>
												<li>
													<strong>Litecoin (LTC) address: </strong>{" "}
													LQnkJPeGzjRjBUL8BkKcRw1QfFku6kdhX
												</li>
											</ol>

											{/* Replace with actual Wallet ID */}
										</div>
									</div>
								)}

								{/* Step Button */}
								{step < 3 && (
									<>
										{cryptoLoading ? (
											<div className="w-[25%]">
												<LoadingBtn bg="bg-gray-500" />
											</div>
										) : (
											<button
												
												className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 mx-6  px-7 rounded-md text-white font-semibold"
											>
												{step === 1 ? "Continue" : "I've Sent the Amount"}
											</button>
										)}
									</>
								)}
							</form>
						</div>
					)}

					{/* PayPal Section  */}
					{activeState === "paypal" && (
						<div className="shadow px-4 rounded-md border-[0.5px] border-[#ccc] py-16 text-center">
							<p className="text-[25px] font-bold text-[#fa9e1f]">
							Paypal Payment method coming soon
						</p>
						</div>
					)}
				</>
			)}

			{step === 3 && (
				<>
					<div className="shadow p-8 rounded mt-7 text-center flex flex-col space-y-4 items-center justify-center">
						<img src={checkIcon} alt="" />
						<p className="text-[25px] font-bold text-[#fa9e1f]">
							Deposit Initiated Successfully
						</p>
						<p className="">
							Your request for withdrawal have been sent and you will be
							notified as soon as it is completed
						</p>
						<button
							className="py-2 px-7 bg-[#1d1d1d] text-white border border-[#fa9e1f]"
							onClick={() => navigate("/dashboard")}
						>
							Back to Dashboard
						</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Deposit;
