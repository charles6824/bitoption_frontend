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

const BitcoinNewsCard = ({ card }: { card: card }) => {
  return (
    
     <Card className="mt-6 rounded-none  ">
      <CardHeader color="blue-gray" className="relative  rounded-none ">
        <img
          src={card.img}
          alt="card-image"
          className=""
        />
      </CardHeader>
      <CardBody className ="bg-[#1d1d1d]  text-[#fff]   h-full ">
        <Typography variant="h2" color="" className="mb-2  ">
          {card.name}
        </Typography>
        <Typography>
         {card.position}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 bg-[#1d1d1d]">
        <Button className="bg-[#fa9e1f] py-3 px-7">READ MORE</Button>
      </CardFooter>
    </Card>

      
    
  )
}

export default BitcoinNewsCard
