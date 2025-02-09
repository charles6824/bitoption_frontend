
const AdminDeposit = () => {
  return (
    <div className="shadow p-8 rounded-md border-[0.5px] border-[#ccc]">
       <h1 className="text-[28px]">Deposit</h1>
        <form className="space-y-4 py-3">
                <div>
                  <input
                    type="text"
                    className="w-[60%] py-3 bg-gray-50 px-4 text-[13px]  border border-[#ccc] rounded-md "
                    placeholder="Enter account number"
                    readOnly
                   
                  />
                </div>
                <div className="py-3">
                  <input
                    type="email"
                    className="w-[60%] py-3  text-[13px] bg-gray-50  px-3 border border-[#ccc] rounded-md "
                    placeholder="Account name"
                  
                  />
                </div>
                <div className=" w-[60%] flex items-center border border-[#ccc] rounded-md overflow-hidden">
                  <span className="px-3 py-3 bg-gray-100 text-gray-500 border-r border-[#ccc]">$</span>
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
                <div className="relative py-2">
                  <input
                    type="text" 
                    className="w-[60%] py-3 bg-gray-50 border border-[#ccc] text-[13px] px-3  rounded-md "
                    placeholder="Narration"
                  />
                </div>
      
                <button className=" bg-[#1d1d1d] text-white py-2 px-5 border border-[#fa9e1f]  rounded hover:bg-[#fa9e1f] transition ">
                  Fund Account
                </button>
              </form>
      
    </div>
  )
}

export default AdminDeposit
