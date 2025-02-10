// import { Table } from "../../components/Table"

import { FaCircle, FaSyncAlt } from "react-icons/fa";
import { Table } from "../../components/Table";
import CashFlowChart from "../../components/CashFlowChart";
import { useEffect, useState } from "react";
import { MdOutlineLocalPrintshop } from "react-icons/md";
import { useGetAccountBalanceQuery } from "../../slices/accountApiSlice";
import {
	useFetchCashFlowQuery,
	useFetchTransactionsQuery,
} from "../../slices/transactionSlice";
import LoadingComponent from "../../components/LoadingComponent";
const tableHead: any = ["Narration", "Date", "Amount", "Status", ""];

// const data: any = [
// 	{
// 		id: "1",
// 		narration: "Credit from Daniel/paystack",
// 		date: "16th March ",
// 		amount: 50000,
// 		iscredit: true,
// 	},
// 	{
// 		id: "2",
// 		narration: "Transfer from fave/zenith",
// 		date: "12th January ",
// 		amount: 200000,
// 		iscredit: true,
// 	},

// 	{
// 		id: "3",
// 		narration: "Transfer to Donald/firstBank",
// 		date: "10th December ",
// 		amount: 100000,
// 		iscredit: false,
// 	},
// 	{
// 		id: "4",
// 		narration: "Deposit to Daniel",
// 		date: "25th October ",
// 		amount: 1000,
// 		iscredit: true,
// 	},
// 	{
// 		id: "5",
// 		narration: "Transfer to Brainz",
// 		date: "7th November ",
// 		amount: 5000,
// 		iscredit: false,
// 	},
// 	{
// 		id: "6",
// 		narration: "NMC MAINTENANCE CHARGE",
// 		date: "25th October ",
// 		amount: 4,
// 		iscredit: true,
// 	},

// 	{
// 		id: "7",
// 		narration: "Credit from Johnson/firstBank",
// 		date: "4th August ",
// 		amount: 100,
// 		iscredit: true,
// 	},
// ];

const Dashboard = () => {
	const period = "1M";
	const [history, setHistory] = useState<any>([]);
	const [cashflow, setCashflow] = useState<any>([]);

	// const periods = ['1D', '1W', '1M', '3M', '6M', '1Y'];

	

	// const { labels, inflowData, outflowData } = getDataForPeriod(period);

	const [refreshing, setRefreshing] = useState(false);
	const user_data: any = sessionStorage.getItem("userInfo");
	const userInfo = user_data && JSON.parse(user_data);

	const {
		data: accountBalance,
		isLoading,
		refetch,
	} = useGetAccountBalanceQuery({}) as any;
	const { data: historyData, isLoading: historyLoading } =
		useFetchTransactionsQuery({}) as any;

	const { data: cashflowData, isLoading: cahflowLoading } =
		useFetchCashFlowQuery(period) as any;

	const handleRefreshBalance = async () => {
		setRefreshing(true);
		await refetch();
		setRefreshing(false);
	};

	const formatDate = (date: any) => {
		const d = new Date(date);
		let month = "" + (d.getMonth() + 1);
		let day = "" + d.getDate();
		const year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
	};

	useEffect(() => {
		if (historyData && historyData.status) {
			setHistory(historyData.data);
		}
	}, [historyData]);

	useEffect(() => {
		if (cashflowData && cashflowData.status) {
			setCashflow(cashflowData.data);
		}
	}, [cashflowData]);

	return (
		<>
			<div className="bg-[#fa9e1f] p-2 text-white  ">
				<div className="rounded-md text-[#fff] px-7 bg-[#1d1d1d] p-9">
					<div className="flex justify-between items-center">
						<div>
							<p>{userInfo.data.accountDetails.accountLevel}</p>
							<h1 className="text-[25px] ">
								{userInfo.data.userDetails.fullName}
							</h1>
						</div>
						<div className="flex items-center gap-2">
							<FaCircle size={10} className="text-green-700" />
							<p className="">{userInfo.data.accountDetails.accountStatus}</p>
						</div>
					</div>
					<div className="flex justify-between items-center">
						<div className="mt-5">
							<p className="text-[#fa9e1f] ">
								{" "}
								{userInfo.data.accountDetails.accountNumber}
							</p>
						</div>

						<div className="flex items-center gap-4">
							<button
								onClick={handleRefreshBalance}
								className="text-gray-600 hover:text-gray-900 transition duration-200 flex items-center gap-2"
								title="Refresh Balance"
							>
								<FaSyncAlt
									color="white"
									size={18}
									className={refreshing ? "animate-spin" : ""}
								/>
							</button>
							{isLoading || refreshing ? (
								<>
									{/* <div className="w-4 h-4 border-4 border-[#FFF] border-dotted rounded-full animate-spin mr-4"></div> */}
								</>
							) : (
								<>
									<p className="text-[25px]">
										{" "}
										Balance: $
										{Number(accountBalance?.balance).toLocaleString("en-US", {
											minimumFractionDigits: 2,
											maximumFractionDigits: 2,
										})}
									</p>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
			{/* Table section */}
			<div className="py-5 px-4 ">
				<h1 className="text-[25px] mb-2">Transaction History</h1>
				{historyLoading ? (
					<LoadingComponent />
				) : (
					<Table data={history} tableHead={tableHead}>
						{history &&
							history.map((table: any, index: number) => (
								<tr key={index}>
									<td className="py-3 ">{table?.description}</td>
									<td>{formatDate(table.date)}</td>
									<td
										className={
											table.type == "inflow" ? "text-[green]" : "text-[red]"
										}
									>
										{table.type == "inflow" ? (
											<>
												+$
												{Number(table?.amount).toLocaleString("en-US", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</>
										) : (
											<>
												-$
												{Number(table?.amount).toLocaleString("en-US", {
													minimumFractionDigits: 2,
													maximumFractionDigits: 2,
												})}
											</>
										)}
									</td>
									<td>
										{table.status === "completed" ? (
											<div className="flex items-center gap-2">
												<FaCircle size={8} color="green" />
												<p>Succesfull</p>
											</div>
										) : table.status === "pending" ? (
											<div className="flex items-center gap-2">
												<FaCircle size={8} color="orange" />
												<p>Pending</p>
											</div>
										) : (
											<div className="flex items-center gap-2">
												<FaCircle size={8} color="red" />
												<p>Failed</p>
											</div>
										)}
									</td>
									<td>
										<MdOutlineLocalPrintshop size={23} />
									</td>
								</tr>
							))}
					</Table>
				)}
			</div>

			{/* chart */}
			<div className="w-full px-5 ">
				{cahflowLoading ? (
					<LoadingComponent />
				) : (
					<CashFlowChart
						inflowData={cashflow.inflowData}
						outflowData={cashflow?.outflowData}
						labels={cashflow?.labels}
					/>
				)}
			</div>
		</>
	);
};

export default Dashboard;
