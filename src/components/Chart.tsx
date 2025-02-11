import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  datasets: [
    {
      label: "Planned Transactions",
      data: [500, 400, 300, 200, 100, 50, 0, 100, 200],
      borderColor: "rgba(59, 130, 246, 1)",
      backgroundColor: "rgba(59, 130, 246, 0.2)",
    },
    {
      label: "Actual Transactions",
      data: [450, 350, 250, 150, 50, 0, 50, 150, 250],
      borderColor: "rgba(34, 197, 94, 1)",
      backgroundColor: "rgba(34, 197, 94, 0.2)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Monthly Transactions",
    },
  },
};

const Chart: React.FC = () => {
  return <Line data={data} options={options} />;
};

export default Chart;