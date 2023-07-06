
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  // Legend,
  ArcElement,
} from 'chart.js';
import { Doughnut } from "react-chartjs-2";
import { ChartDough, ChartInfo, ChartInfoItem, ChartWrapper, InfoTitle } from './HalfCircleChart.styles';



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  // Legend,
  ArcElement,
);

export const options = {
  circumference: 180,
  rotation: -90,
  plugins: {
    tooltip: {
      enabled: false // <-- this option disables tooltips
    }
  }
};

export const data = {
  datasets: [{
    data: [25, 12, 8, 55],
    backgroundColor: [
      '#2D7341',
      '#46484A',
      '#989EA4',
      '#EBEDEF',
     
    ]
  }],
  labels: [
    'Isaiah Foskey',
    'Garrett Williams',
    'Garrett Williams',
    'Other',
  ],
  
};
const infoData = (data) => {
  return (Array.from({length:data?.labels.length}).reduce((acc,_,idx)=>{
    
    const item = {
      data: data?.datasets[0].data[idx],
      backgroundColor: data?.datasets[0].backgroundColor[idx],
      labels:data?.labels[idx]
    }
    acc.push(item)
    return acc
  },[]))
}
const HalfCircleChart = ({infoTitle}) => {
  
  return (
    <>
    <InfoTitle>{infoTitle}</InfoTitle>
    <ChartWrapper>
    <ChartDough >
      <Doughnut options={options} data={data} />
    </ChartDough>
    <ChartInfo>
      {infoData(data).map((item,idx) => {
        return (
          <ChartInfoItem key={idx}>
            <span style={{backgroundColor: `${item.backgroundColor}`}}></span>
            <p>{item.data}%</p>
            <p>{item.labels}</p>
          </ChartInfoItem>
        )
      })}
      </ChartInfo>
    </ChartWrapper>
    </>
  )
}

export default HalfCircleChart


// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// export const data = {
//   labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
//       datasets: [
//         {
//           label: "Whom'st let the dogs out",
//           data: [12, 55, 34, 120, 720],
//           borderColor: "rgb(53, 162, 235)",
//           backgroundColor: "rgba(53, 162, 235, 0.4)",
//         },
//     ],
// };

// export default function HalfCircleChart() {
//   return <Bar  data={data} />;
// }