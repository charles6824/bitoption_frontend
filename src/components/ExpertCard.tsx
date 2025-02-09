import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react"


interface Expert {
  img: string;
  name: string;
  position: string;
}

const ExpertCard = ({ expert }: { expert: Expert }) => {
  return (
    
     <Card className="mt-6 h-[80%]" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
      <CardHeader 
        color="blue-gray" 
        className="relative rounded-none" 
        placeholder="" 
        onPointerEnterCapture={() => {}} 
        onPointerLeaveCapture={() => {}}>
        <img
          src={expert.img}
          alt="card-image"
          loading="lazy"
          className="rounded-none border-2 border-[#ea9b3e] "
        />
      </CardHeader>
      <CardBody 
        className="bg-[#1d1d1d] hover:bg-[#fd961e] text-[#fff] text-center"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        <Typography 
          variant="h5" 
          className="mb-2" 
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}>
          {expert.name}
        </Typography>
        <Typography 
          placeholder="" 
          onPointerEnterCapture={() => {}} 
          onPointerLeaveCapture={() => {}}>
         {expert.position}
        </Typography>
      </CardBody>
      
    </Card>

      
    
  )
}

export default ExpertCard
