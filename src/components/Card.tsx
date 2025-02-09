import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";



const Card = ({ card,link }: any) => {
	return (
		<div className="bg-[#1d1d1d] text-center py-16 ">
			<Button className="bg-[#fa9e1f] py-3 text-[15px] px-9 mb-6 rounded" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>{card?.name}</Button>

			<h2 className="text-xl  text-[#fff] mb-4">${Number(card.price).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h2>
			<p className="text-[#fff] mb-6 font-semibold">{card?.interest}% per {card?.period} months</p>
			<Link to={link} className="bg-[#fa9e1f] text-[15px] font-bold text-white py-3 px-9 rounded">
				ORDER NOW
			</Link>
		</div>
	);
};

export default Card;
