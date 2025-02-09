import { useParams } from "react-router-dom";
import { useGetSinglePackageQuery } from "../../slices/packageSlice"
import LoadingBtn from "../../components/LoadingBtn";
import { useGetAccountBalanceQuery } from "../../slices/accountApiSlice";

const SinglePackage = () => {
  const params = useParams();
  const {data,isLoading} = useGetSinglePackageQuery(params.id) as any;
  const {data:walletBalance,refetch} = useGetAccountBalanceQuery({}) as any;
  let packages = data?.data


  

  return (
    <div className="w-[60%] mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
    {/* Header */}
    <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Package Details</h1>

    {/* Wallet Balance Section */}
    <div className="border-b pb-4 mb-4 flex justify-between items-center">
      {isLoading ? (
        <div className="w-5 h-5 border-4 border-gray-300 border-dotted rounded-full animate-spin"></div>
      ) : (
        <>
          <h2 className="text-lg font-bold text-gray-800">
            Balance: ${Number(walletBalance?.balance).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </h2>
         
        </>
      )}
    </div>

    {/* Package Details */}
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700">{packages?.name}</h2>
      <p className="text-gray-600">Duration: {packages?.period}</p>
    </div>

    {/* Payment Info */}
    <p className="text-gray-700 leading-relaxed mb-6">
      Your payment details have been generated. You will be debited 
      <span className="font-semibold text-[#fa9e1f]"> ${packages?.price} </span> 
      from your wallet account. Click the proceed button to continue.
    </p>

    {/* Proceed Button */}
    {isLoading ? (
      <LoadingBtn />
    ) : (
      <button className="w-full bg-[#1d1d1d] text-white font-semibold py-3 rounded-md transition hover:bg-black">
        Proceed
      </button>
    )}
  </div>
  )
}

export default SinglePackage
