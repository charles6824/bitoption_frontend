import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
    Button,
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
      {/* <CardFooter className="pt-0 bg-[#1d1d1d]" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <Button 
          className="bg-[#fa9e1f] hover:bg-[#d37d38] md:py-3 py-4 px-24 md:px-7 rounded-none" 
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}>
          READ MORE
        </Button>
      </CardFooter> */}
    </Card>

      
    
  )
}

export default BitcoinNewsCard
