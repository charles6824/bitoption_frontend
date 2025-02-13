import React, { useEffect, useState } from "react";
import { FaCircle, FaMoneyBillAlt,  FaWallet } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import StatsCard from "../../components/StatsCard";
import Chart from "../../components/Chart";
import LoadingComponent from "../../components/LoadingComponent";
import { Table } from "../../components/Table";
import { useFetchAllTransactionsQuery } from "../../slices/transactionSlice";

const AdminDashboard: React.FC = () => {
  const tableHead: any = ["Narration", "Date", "Amount", "Status"];
  const [history, setHistory] = useState<any>([]);
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [inflow, setInflow] = useState(0)
  const [outflow, setOutflow] = useState(0)

  const { data: historyData, isLoading: historyLoading } =
      useFetchAllTransactionsQuery({}) as any;


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
        setTotalTransactions(historyData.data.reduce((a: any,b: any) => a + Number(b.amount), 0))
        setInflow(historyData.data.filter((data: any) => data.type == "inflow").reduce((a: any,b: any) => a + Number(b.amount), 0))
        setOutflow(historyData.data.filter((data: any) => data.type == "outflow").reduce((a: any,b: any) => a + Number(b.amount), 0))
      }
    }, [historyData]);

    console.log("total: ", totalTransactions)
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
        <StatsCard
          title="Total Users"
          value="1,200"
          icon={<ImUsers className="w-8 h-8" />}
          description1="Active: 1,000"
          description2="Inactive: 35"
        />
        <StatsCard
          title="Total Investments"
          value="$500,000"
          icon={<FaMoneyBillAlt className="w-8 h-8" />}
          description1="pending: 1,000"
          description2={`completed: 45`}
        />
        <StatsCard
          title="Total Withdrawals"
          value={`$${Number(totalTransactions).toLocaleString()}`}
          icon={<FaWallet className="w-8 h-8" />}
          description1={`Inflow: $${Number(inflow).toLocaleString()}`}
          description2={`Outflow: $${Number(outflow).toLocaleString()}`}
        />
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <Chart />
      </div>

      {/* Recent Transactions Table */}
      <div className="py-5 px-4 bg-white shadow rounded p-6 h-[50vh] overflow-y-scroll">
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
									
								</tr>
							))}
					</Table>
				)}
			</div>
    </div>
  );
};

export default AdminDashboard;