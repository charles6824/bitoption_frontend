import React from "react";

interface Modal {
  isShowCancelButton?: boolean;
  cancelButtonFunction?: any;
  children: React.ReactNode;
}

const Modal = ({children}: Modal) => {

  return (
    <div className="flex justify-center items-center bg-[#3E4652] bg-opacity-80 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" style={{width:"100%", height:"100%"}}>
      <div className="absolute w-full">
        <div className="w-full flex justify-center px-[20px] pt-[50px]">
          {children}
          </div>
      </div>
    </div>
  );
};

export default Modal;