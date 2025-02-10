import { FaUserCircle } from "react-icons/fa"
import { useGetAccountDetailsQuery } from "../../slices/accountApiSlice"

const Transfer = () => {

    const {data} =useGetAccountDetailsQuery({}) as any
    console.log("data",data)
    const user_data: any = sessionStorage.getItem("userInfo")
    const userInfo = user_data && JSON.parse(user_data)
  
     const accountDetails = userInfo && userInfo.data.accountDetails;

    console.log("accountDetails",accountDetails)
  
  return (
    
      // Transfer
    <div className="py-2">
        <h1 className="text-[28px] mb-2">Tansfer</h1>
        <p className="text-[14px]">Transfer to your wallet with crypto or PayPal</p>
        <div className="w-full border p-8">
        
              <div className="relative flex items-center w-[60%]">
                  <div className="flex-1 flex justify-center items-center ">
                    <div
                      className="rounded-[15px] shadow-md w-full px-[15px] border-2 border-[#fa9e1f] md:px-[30px] py-[30px] bg-[#000]"
                    >
                    
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
                            Balance: ${Number(accountDetails.balance).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                            </h1>
                          
                          </div>
                        </div>
                      
                    </div>
                  </div>
                </div>
      
             <form className="space-y-4 py-3">
                <div>
                  <input
                    type="text"
                    className="w-[60%] py-3 bg-gray-50 px-4 text-[13px]  border border-[#ccc] rounded-md "
                    placeholder="Destination account"
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
                <div className="relative py-2">
                  <input
                    type="text" 
                    className="w-[60%] py-3 bg-gray-50 border border-[#ccc] text-[13px] px-3   rounded-md "
                    placeholder="Amount" />
                 
                </div>
                <div className="relative py-2">
                  <input
                    type="text" 
                    className="w-[60%] py-3 bg-gray-50 border border-[#ccc] text-[13px] px-3  rounded-md "
                    placeholder="Narration"
                  />
                </div>
      
                <button className=" bg-[#1d1d1d] text-white py-2 px-5 border border-[#fa9e1f]  rounded hover:bg-[#fa9e1f] transition ">
                  SEND
                </button>
              </form>
    </div>

    </div>
  )
}

export default Transfer
