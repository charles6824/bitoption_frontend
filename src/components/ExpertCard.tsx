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
    
     <Card className="mt-6 rounded-none ">
      <CardHeader color="blue-gray" className="relative h-80 rounded-none ">
        <img
          src={expert.img}
          alt="card-image"
          className="rounded-none border-2 border-[#ea9b3e]"
        />
      </CardHeader>
      <CardBody className ="bg-[#1d1d1d] hover:bg-[#fd961e]  text-[#fff] text-center     ">
        <Typography variant="h5" color="" className="mb-2  ">
          {expert.name}
        </Typography>
        <Typography>
         {expert.position}
        </Typography>
      </CardBody>
      
    </Card>

      
    
  )
}

export default ExpertCard
