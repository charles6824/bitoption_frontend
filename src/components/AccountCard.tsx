
import { FaUserCircle } from "react-icons/fa";
interface SourceAccountProps {
  cardData: any;
  data:any
}
const AccountCard: React.FC<SourceAccountProps> = ({
  cardData,
}) => {

  return (
    <>
      <div className="w-[60%]">
        <div className="relative w-full flex items-center">
         

          <div className="flex-1 flex justify-center items-center">
            <div
              className="rounded-[15px] shadow-md w-full px-[15px] border-2 border-[#fa9e1f] md:px-[30px] py-[30px] bg-[#000]"
            >
              {cardData && (
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                  <FaUserCircle size={50} className="text-white" />

                    <div>
                      <p className="text-[#fa9e1f] text-nowrap whitespace-nowrap text-[11px] md:text-[13px]">
                        {cardData.accountType}
                      </p>
                      <h1 className="text-[14px] text-white md:text-[16px] uppercase leading-tight">
                        {cardData.accountName}
                      </h1>
                      <h1 className="text-[14px] text-white md:text-[16px] uppercase leading-tight">
                        {cardData.accountNumber}
                      </h1>
                     
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h1 className="text-[#EDEFF2]  text-[14px] md:text-[20px]">
                    Balance: ${Number(cardData.balance).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

                    </h1>
                
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountCard;