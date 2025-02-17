import { Button } from "@material-tailwind/react";
// import { useState } from "react";
import { Link } from "react-router-dom";
import LoadingBtn from "./LoadingBtn";



const Card = ({ card,link,isLoading }: any) => {
	// const [loading,setLoading ] = useState(true)
	return (
		<div className="bg-[#1d1d1d] text-center py-16 ">
			<Button className="bg-[#fa9e1f] md:py-3 py-4 text-[15px] px-24 md:px-9 mb-6 rounded" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>{card?.name}</Button>

			<h2 className="text-xl  text-[#fff] mb-4">${Number(card.price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
			<p className="text-[#fff] mb-6 font-semibold">{card?.interest}% per {card?.period} months</p>

			{isLoading? (<>
			<LoadingBtn/>
			
			</>) : (<>

			<Link to={link} className="bg-[#fa9e1f] hover:bg-[#d37d38] text-[15px] font-bold text-white py-4 md:py-3 px-24 md:px-9 rounded">
				ORDER NOW
			</Link>
			</>)}
		</div>
	);
};

export default Card;
