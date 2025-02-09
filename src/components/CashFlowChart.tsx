import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface CashFlowChartProps {
  inflowData: number[];
  outflowData: number[];
  labels: string[];
}

const CashFlowChart: React.FC<CashFlowChartProps> = ({ inflowData, outflowData, labels }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Listen for window resize to check if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Inflow',
        data: inflowData,
        backgroundColor: 'rgb(255, 152, 32)',
        barPercentage: 1,
      },
      {
        label: 'Outflow',
        data: outflowData,
        backgroundColor: '#1d1d1d',
        barPercentage: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows the chart to fill the container
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          callback: (value: any) => `₦${value}`,
          font: {
            size: isMobile ? 10 : 14, // Smaller font for mobile
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: isMobile ? 10 : 14, // Smaller font for mobile
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            size: isMobile ? 10 : 13, // Adjust font size for mobile
          },
          color: 'rgba(62, 70, 82, 1)',
          padding: isMobile ? 10 : 20, // Adjust padding for mobile
          boxWidth: isMobile ? 8 : 10,
          boxHeight: isMobile ? 8 : 10,
          usePointStyle: true,
          pointStyle: 'rect',
        },
      },
    },
  };

  return (
    <div style={{ width: '100%', height: isMobile ? '300px' : '500px' }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CashFlowChart;