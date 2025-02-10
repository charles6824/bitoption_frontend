import { useState } from "react";

const AddaccountCard = () => {
  const [activeState, setActiveState] = useState("crypto");
  const [step, setStep] = useState(1);

  // const handleStep = (e: React.FormEvent) => {
  //   e.preventDefault(); 
  //   if (step < 2) {
  //     setStep(step + 1);
  //   }
  // };

  return (
    <div>
      {/* <h1 className="text-[28px]">Deposit</h1>
      <p className="text-[12px]">Fund your wallet with crypto or PayPal</p> */}

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
          <p className="text-[14px] font-normal text-[#3E4652]">Bank Account</p>
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
          <p className="text-[14px] font-normal text-[#3E4652]">Crypto wallet</p>
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
                <input
               type="text"
               placeholder="Enter name"
                className="px-3 py-3 outline-none"/>
               </div>
                <div className=" w-[60%] flex items-center border border-[#ccc] rounded-md overflow-hidden">
               <input
               type="text"
               placeholder="Bank Account"
                className="px-3 py-3 outline-none"/>
                </div>
                <div className=" w-[60%] flex items-center border border-[#ccc] rounded-md overflow-hidden">
               <input
               type="text"
               placeholder="Account number"
                className="px-3 py-3 outline-none"/>
            </div>

                </div>

                
              </div>
            )}

            <button className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 mt-2  px-7 rounded-md text-white font-semibold">save</button>
          </form>
        </div>
      )}

      {/* PayPal Section  */}
      {activeState === "paypal" &&

      <div className="shadow p-4 rounded-md border-[0.5px] border-[#ccc]">
      <form className="space-y-6">
        {/* Step 1: Amount & Narration */}
        
          <div className="space-y-6">
            <div className="flex flex-col space-y-2">
              {/* input with inside border */}
              
            </div>

            <div className="flex flex-col space-y-2">

              <input
                type="text"
                className="border border-[#ccc] p-4 w-[60%] py-3 rounded-md outline-none"
                placeholder="Crypto wallet Address"
              />
            </div>
          </div>


          <button
            
            className="bg-[#1d1d1d] border border-[#fa9e1f] py-2 mt-2  px-7 rounded-md text-white font-semibold"
          >
            save
          </button>
        
      </form>
    </div>
        }
    </div>
  );
};

export default AddaccountCard;
