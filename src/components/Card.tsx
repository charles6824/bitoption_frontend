import { Button } from "@material-tailwind/react";

interface CardProps {
	card: {
		title: string;
		description: string;
	};
}

const Card = ({ card }: CardProps) => {
	return (
		<div className="bg-[#1d1d1d] text-center py-16 ">
			<Button className="bg-[#fa9e1f] py-3 text-[15px] px-9 mb-6 rounded" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>ORDER NOW</Button>

			<h2 className="text-xl  text-[#fff] mb-4">{card.title}</h2>
			<p className="text-[#fff] mb-6 font-semibold">{card.description}</p>
			<button className="bg-[#fa9e1f] text-[15px] font-bold text-white py-3 px-9 rounded">
				ORDER NOW
			</button>
		</div>
	);
};

export default Card;
