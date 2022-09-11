import React from 'react';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



 
const Chart = () => {

    const options = {
        maintainAspectRatio: true,
        responsive: false,
        plugins: {
          legend: {
            position: 'top' ,
          }
        },
      };
      
      const labels = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Today',
            data: [56, 11, 53, 94, 95, 98, 93, 15, 3, 9, 39, 88, 50, 12, 86, 4, 6, 33, 24, 73, 29, 45],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
         
        ],
      };
  return (
    <div>

<Line width={800} height={500} options={options} data={data} />
       

    </div>
  )
}

export default Chart