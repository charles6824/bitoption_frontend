
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";


interface CardData {
  accountId: string;
  accountNumber: string;
  accountName: string;
  currencyCode: string;
  bookBalance: number;
  availableBalance: number;
  accountStatus: string;
}

interface SourceAccountProps {
  cardData: CardData[];
  selectedCard: CardData | undefined;
  setSelectedCard: React.Dispatch<React.SetStateAction<CardData | undefined>>;
}

const AccountCard: React.FC<SourceAccountProps> = ({
  cardData,
  selectedCard,
  // setSelectedCard,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if (selectedCard) {
      const index = cardData.findIndex((card) => card === selectedCard);
      setCurrentIndex(index);
    }
  }, [selectedCard, cardData]);

  

  return (
    <>
      <div className="w-[60%]">
        <div className="relative w-full flex items-center">
         

          <div className="flex-1 flex justify-center items-center">
            <div
              className="rounded-[15px] shadow-md w-full px-[15px] border-2 border-[#fa9e1f] md:px-[30px] py-[30px] bg-[#000]"
            >
              {selectedCard && (
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center">
                  <FaUserCircle size={50} className="text-white" />

                    <div>
                      <p className="text-[#fa9e1f] text-nowrap whitespace-nowrap text-[11px] md:text-[13px]">
                        Savings Account
                      </p>
                      <h1 className="text-[14px] text-white md:text-[16px] uppercase leading-tight">
                        Charles Daniel
                      </h1>
                      {/* <p className=" text-nowrap whitespace-nowrap  text-[11px] md:text-[13px]">
                       1236467477457
                      </p> */}
                    </div>
                  </div>
                  <div className="flex flex-col text-right">
                    <h1 className="text-[#EDEFF2]  text-[14px] md:text-[20px]">
                     $45, 0000
                    </h1>
                    {/* <p className="text-[#9CA7B8] text-[10px]">
                      Book Balance:{" "}
                      <span className="text-[#fa9e1f]">
                        $123, 000
                      </span>
                    </p> */}
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