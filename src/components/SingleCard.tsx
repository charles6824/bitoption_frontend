interface SingleCardProps {
    className?: string;
    children: React.ReactNode;
  }
    

 
 const SingleCard = ({className,children}:SingleCardProps) => {
   return (
     <div className={className}>
      {children}
       
     </div>
   )
 }
 
 export default SingleCard
 