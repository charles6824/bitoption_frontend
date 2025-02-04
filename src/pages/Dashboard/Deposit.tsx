import { useState } from "react";

const Deposit = () => {
  const [activeState, setActiveState] = useState("crypto");
  const [step, setStep] = useState(1);

  const handleStep = (e: React.FormEvent) => {
    e.preventDefault(); 
    if (step < 2) {
      setStep(step + 1);
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
            setActiveState("crypto")
            setStep(1)
          }}
          className={`w-[100%] h-[50px] flex justify-start items-center gap-[15px] cursor-pointer border-[0.5px] border-[#9CA7B8] rounded-[5px] px-4 ${
            activeState === "crypto" ? "bg-[#EFF3FE]" : ""
          }`}
        >
          <div className={`w-[20px] h-[20px] rounded-full border-2 ${activeState === "crypto" ? "border-[#fa9e1f]" : "border-[#9CA7B8]"}`}>
            {activeState === "crypto" && (
              <div className="w-[10px] h-[10px] rounded-full bg-[#1d1d1d] border-[1px] border-[#1d1d1d] m-[3px]"></div>
            )}
          </div>
          <p className="text-[14px] font-normal text-[#3E4652]">Transfer within crypto</p>
        </div>

        {/* PayPal Option */}
        <div
          onClick={() => {
            setActiveState("paypal")
            setStep(1)
          }}
          className={`w-[100%] h-[50px] flex justify-start items-center gap-[15px] cursor-pointer border-[0.5px] border-[#9CA7B8] rounded-[5px] px-4 ${
            activeState === "paypal" ? "bg-[#EFF3FE]" : ""
          }`}
        >
          <div className={`w-[20px] h-[20px] rounded-full border-2 ${activeState === "paypal" ? "border-[#fa9e1f]" : "border-[#9CA7B8]"}`}>
            {activeState === "paypal" && (
              <div className="w-[10px] h-[10px] rounded-full bg-[#1d1d1d] border-[1px] border-[#1d1d1d] m-[3px]"></div>
            )}
          </div>
          <p className="text-[14px] font-normal text-[#3E4652]">Transfer within paypal</p>
        </div>
      </div>

      {/* Crypto Form */}
      {activeState === "crypto" && (
        <div className="shadow p-4 rounded-md border-[0.5px] border-[#ccc]">
          <form className="space-y-6">
            {/* Step 1: Amount & Narration */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex flex-col space-y-2">
                  {/* input with inside border */}
                  
                <div className=" w-[60%] flex items-center border border-[#ccc] rounded-md overflow-hidden">
            <span className="px-3 py-3 bg-gray-100 text-gray-500 border-r border-[#ccc]">$</span>
            <input
            type="text"
             id="crypto"
            inputMode="numeric"
            pattern="[0-9]*"
          placeholder="0.00"
          className="px-3 py-3 outline-none"
           onInput={(e) => {
         const target = e.target as HTMLInputElement;
         target.value = target.value.replace(/\D/g, "");
       }}
/>

            </div>

                </div>

                <div className="flex flex-col space-y-2">
                    
                  <input
                    type="text"
                    className="border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none"
                    placeholder="Enter your Narration here..."
                  />
                </div>
              </div>
            )}

            {/* Step 2: Confirm Transaction */}
            {step === 2 && (
             <div className="w-[50%] border border-[#ccc] p-6 rounded-md bg-gray-50 shadow-md">
             <p className="text-gray-600">You are sending <span className="font-bold text-lg text-black">$2000</span> to your wallet</p>
             
             <div className="mt-4">
               <h2 className="text-gray-700 font-semibold">Wallet ID:</h2>
               <p className="text-gray-500 italic">xxxxxxxxxxxx</p> {/* Replace with actual Wallet ID */}
             </div>
           </div>
           
            )}


            {/* Step Button */}
            {step < 3 && (
              <button
                onClick={handleStep}
                className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 mt-2  px-7 rounded-md text-white font-semibold"
              >
                {step === 1 ? "Continue" : "I have sent the crypto..."}
              </button>
            )}
          </form>
        </div>
      )}

      {/* PayPal Section  */}
      {activeState === "paypal" &&

      <div className="shadow p-4 rounded-md border-[0.5px] border-[#ccc]">
      <form className="space-y-6">
        {/* Step 1: Amount & Narration */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              {/* input with inside border */}
              
            <div className=" w-[60%] flex items-center border border-[#ccc] rounded-md overflow-hidden">
        <span className="px-3 py-3 bg-gray-100 text-gray-500 border-r border-[#ccc]">$</span>
        <input
           type="text"
           id="crypto"
           inputMode="numeric"
            pattern="[0-9]*"
          placeholder="0.00"
          className="px-3 py-3 outline-none"
           onInput={(e) => {
         const target = e.target as HTMLInputElement;
         target.value = target.value.replace(/\D/g, "");
       }}
/>
        </div>

            </div>

            <div className="flex flex-col space-y-2">
              
              <input
                type="text"
                className="border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none"
                placeholder="Enter your Narration here..."
              />
            </div>
          </div>

        )}

        {/* Step 2: Confirm Transaction */}
        {step === 2 && (
         <div className="w-[50%] border border-[#ccc] p-6 rounded-md bg-gray-50 shadow-md">
         <p className="text-gray-600">You are sending <span className="font-bold text-lg text-black">$2000</span> to your wallet</p>
         
         <div className="mt-4">
           <h2 className="text-gray-700 font-semibold">Wallet ID:</h2>
           <p className="text-gray-500 italic">xxxxxxxxxxxx</p> 
         </div>
       </div>
       
        )}


        {/* Step Button */}
        {step < 3 && (
          <button
            onClick={handleStep}
            className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 mt-2  px-7 rounded-md text-white font-semibold"
          >
            {step === 1 ? "Continue" : "I have sent the crypto..."}
          </button>
        )}
      </form>
    </div>
        }
    </div>
  );
};

export default Deposit;
