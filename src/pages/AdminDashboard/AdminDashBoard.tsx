import React from "react";
import { FaMoneyBillAlt,  FaWallet } from "react-icons/fa";
import { ImUsers } from "react-icons/im";
import StatsCard from "../../components/StatsCard";
import Chart from "../../components/Chart";

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Total Users"
          value="1,200"
          icon={<ImUsers className="w-8 h-8" />}
          description1="Active: 1,000"
          description2="Inactive: 1,000"
        />
        <StatsCard
          title="Total Investments"
          value="$500,000"
          icon={<FaMoneyBillAlt className="w-8 h-8" />}
          description1="Active: 1,000"
          description2="Inactive: 1,000"
        />
        <StatsCard
          title="Total Withdrawals"
          value="$250,000"
          icon={<FaWallet className="w-8 h-8" />}
          description1="Active: 1,000"
          description2="Inactive: 1,000"
        />
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <Chart />
      </div>

      {/* Recent Transactions Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Recent Transactions</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">User</th>
              <th className="text-left p-2">Amount</th>
              <th className="text-left p-2">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">2023-10-01</td>
              <td className="p-2">John Doe</td>
              <td className="p-2">$1,000</td>
              <td className="p-2">Investment</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;