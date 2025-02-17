import BackButton from "../../components/BackButton";
import Card from "../../components/Card";
import LoadingComponent from "../../components/LoadingComponent";
import { useGetAllPackagesQuery } from "../../slices/packageSlice";

const Packages = () => {
	const { data: packages, isLoading } = useGetAllPackagesQuery({}) as any;
	console.log("packages", packages);
	
	return (
		<div>
			<BackButton/>
      <h1 className="text-[28px] mb-6">Packages</h1>
			{isLoading ? (

				<LoadingComponent />
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-6">
					{packages &&
						packages.data.map((item: any, id: string) => {
							return (
								<div key={id}>
									<Card card={item} link={`/packages/${item._id}`} isLoading={isLoading} />
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
};

export default Packages;
