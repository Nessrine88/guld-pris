"use client"
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useState, useEffect } from 'react';

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const RealTimeChart = () => {
  const [data, setData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'Real-Time Data',
        data: [] as number[],
        fill: false,
        backgroundColor: 'orange',
        borderColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        pointBackgroundColor: [] as string[],
        pointBorderColor: [] as string[],
      },
    ],
  });

  const options = {
    maintainAspectRatio: false,
    responsive: true,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = Math.floor(Math.random() * 100);
      setData((prevData) => {
        const updatedData = [...prevData.datasets[0].data, newData];
        const updatedLabels = [...prevData.labels];
        
        const goldenValue = 50;
        const newPointBackgroundColor = newData === goldenValue ? 'gold' : 'rgb(75, 192, 192)';
        const newPointBorderColor = newData === goldenValue ? 'orange' : 'rgba(75, 192, 192, 0.2)';

        const updatedPointBackgroundColor = [...prevData.datasets[0].pointBackgroundColor, newPointBackgroundColor];
        const updatedPointBorderColor = [...prevData.datasets[0].pointBorderColor, newPointBorderColor];

        return {
          ...prevData,
          labels: updatedLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: updatedData,
              pointBackgroundColor: updatedPointBackgroundColor,
              pointBorderColor: updatedPointBorderColor,
            },
          ],
        };
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: '300px', height: '300px',background:'#F8F8F8' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default RealTimeChart;
