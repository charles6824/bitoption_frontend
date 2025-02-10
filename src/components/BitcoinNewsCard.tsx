import {
    Card,
    CardHeader,
    CardBody,
    Typography,
   
  } from "@material-tailwind/react"


interface card {
  img: string;
  name: string;
  position: string;
}

const BitcoinNewsCard = ({card}:{card:card}) => {
  return (
    
     <Card 
       className="mt-6 rounded-none" 
       color="blue-gray" 
       shadow={true} 
       placeholder="" 
       onPointerEnterCapture={() => {}} 
       onPointerLeaveCapture={() => {}}>
      <CardHeader color="blue-gray" className="relative  rounded-none " placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <img
          src={card.img}
          alt="card-image"
          className=""
        />
      </CardHeader>
      <CardBody className="bg-[#1d1d1d] text-[#fff] h-full" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <Typography variant="h2" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          <p className="text-[22px]">{card.name}</p>
        </Typography>
        <Typography placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
         {card.position}
        </Typography>
      </CardBody>
   
    </Card>

      
    
  )
}

export default BitcoinNewsCard
