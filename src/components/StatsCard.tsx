import React from "react";

interface StatsCardProps {
	title: string;
	value: string | number;
	icon: React.ReactNode;
	description1?: string;
	description2?: string;
	bg?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
	title,
	value,
	icon,
	description1,
	description2,
	bg,
}) => {
	return (
		<div className={`${bg} px-4 py-3 rounded-lg shadow-md`}>
			<div className="flex items-center space-x-4 pt-2 pb-5">
				<div className="text-[#fa9e1f]">{icon}</div>
				<div>
					<h3 className="text-gray-500 text-sm font-medium">{title}</h3>
					<p className="text-2xl font-bold">{value}</p>
				</div>
			</div>
			<hr />
      <div className="flex items-center justify-between py-2">
			  {description1 && <p className="text-gray-400 text-[12px] py-2">{description1}</p>}
			  {description2 && <p className="text-gray-400 text-[12px] py-2">{description2}</p>}
      </div>
		</div>
	);
};

export default StatsCard;
