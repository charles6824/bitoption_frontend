import {  useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import AccountCard from "../../components/AccountCard";
import TokenInput from "../../components/TokenInput";
import { useGetAccountDetailsQuery} from "../../slices/accountApiSlice";
const Withdrawal = () => {
  const [step, setStep] = useState(1);
  const [withdrawalMethod, setWithdrawalMethod] = useState(""); 
  const [_isTokenComplete, setIsTokenComplete] = useState(false);
  const [_token, setToken] = useState<string[]>(Array(8).fill(""));
  const {data} =useGetAccountDetailsQuery({}) as any
  const user_data: any = sessionStorage.getItem("userInfo")
  const userInfo = user_data && JSON.parse(user_data)

  const accountDetails = userInfo && userInfo.data.accountDetails;


  const handleTokenComplete = (isComplete: boolean, tokens: string[]) => {
    setIsTokenComplete(isComplete);
    setToken(tokens);
  };

  const handleStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
    }
  };

  return (
    <div className="py-2">
      <Link to="/withdrawals" className="flex items-center text-[#fa9e1f] mb-1">
        <FaArrowLeft />
        Go Back
      </Link>
      <h1 className="text-[28px]">Withdrawal</h1>
      <p className="text-[12px]">Withdraw to your wallet with crypto or PayPal</p>

      <div className="shadow p-4 rounded-md border border-[#ccc] mt-3">
        <form>
          {step === 1 && (
            <div className="mt-10">
             
              <AccountCard 
                cardData={accountDetails}
                data={data}

              />
              <div className="w-[60%] flex items-center border border-[#ccc] rounded-md overflow-hidden mt-5">
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
/>
              
              </div>

              <div className="mt-5">
                <select
                  className="border border-[#ccc] bg-gray-50 p-4 w-[60%] py-3 rounded-md outline-none"
                  value={withdrawalMethod} // Bind to state
                  onChange={(e) => setWithdrawalMethod(e.target.value)} // Update state
                >
                  <option>Select Account for withdrawal</option>
                  <option value="paypal">Bank Account</option>
                  <option value="crypto">Crypto Wallet</option>
                </select>
              </div>

              {/* Conditionally render inputs based on the selected withdrawal method */}
              {withdrawalMethod === "paypal" && (
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Bank Name"
                    className=" bg-gray-50 border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Account Number"
                    className="bg-gray-50 border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none mt-3"
                  />
                  <input
                    type="text"
                    placeholder="Account Name"
                    className="bg-gray-50 border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none mt-3"
                  />
                </div>
              )}

              {withdrawalMethod === "crypto" && (
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Crypto Wallet Address"
                    className="border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none"
                  />
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <>
          <TokenInput onComplete={handleTokenComplete} />

            </>
          )}

          <div className="mt-5">
            <button
              className="py-2 px-7 bg-[#1d1d1d] text-white border border-[#fa9e1f]"
              onClick={handleStep}
            >
              {step === 1 ? "Continue" : "Submit"}
            </button>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default Withdrawal;
