import React from 'react'

interface PromptsCard{
    // image:string;
    title:string;
    children:  React.ReactNode,
}
const PromptsCard: React.FC<PromptsCard> = ({title, children}) => {
  return (
    <div className='w-full'>
        <div className="w-full bg-deepergreen py-2">
            <h1 className="text-white text-[24px] text-center">{title}</h1>
        </div>
        <div className='bg-white relative px-20 py-[40px]'>
            <div className='flex justify-center items-center'>
                {children}
            </div>
           
        </div>
    </div>
  )
}

export default PromptsCard