import LoadingComponent from "../../components/LoadingComponent";
import { Table } from "../../components/Table";
import { useFetchUserInvestmentQuery } from "../../slices/investmentSlice";

const Investment = () => {
	const tableHead = [
		"S/N",
		"Amount Invested",
		"Expected Amount",
		"Completion Date",
		"Status",
		"",
	];
	const tableData: any = [
		{
			id: "1",
			amountInvested: 40000,
			expectedAmount: 50000,
			completionDate: "2023-01-01",
			status: "Completed",
		},
		{
			id: "2",
			amountInvested: 60000,
			expectedAmount: 50000,
			completionDate: "2023-02-01",
			status: "Completed",
		},
		{
			id: "3",
			amountInvested: 80000,
			expectedAmount: 50000,
			completionDate: "2023-03-01",
			status: "Pending",
		},
		{
			id: "4",
			amountInvested: 100000,
			expectedAmount: 50000,
			completionDate: "2023-04-01",
			status: "Completed",
		},
		{
			id: "5",
			amountInvested: 120000,
			expectedAmount: 50000,
			completionDate: "2023-05-01",
			status: "Pending",
		},
	];

	const { isLoading, data } = useFetchUserInvestmentQuery({});

	return (
		<div>
			<h1 className="text-[28px] mb-6">Investments</h1>
			{isLoading ? (
				<LoadingComponent />
			) : (
				<>
					<Table data={tableData} tableHead={tableHead}>
						{tableData.map((table: any, index: number) => (
							<tr key={index}>
								<td className="px-2">{table.id}</td>
								<td className="py-2 px-2">{table.amountInvested}</td>
								<td className="px-2">{table.expectedAmount}</td>
								<td className="px-2">{table.completionDate}</td>

								<td
									className={` text-[15px]  ${
										table.status === "Completed"
											? "text-green-700"
											: "text-yellow-400 "
									}`}
								>
									{table.status}
								</td>
							</tr>
						))}
					</Table>
				</>
			)}
		</div>
	);
};

export default Investment;
