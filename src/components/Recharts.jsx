// // import {React} from 'react'
// // import { Chart } from "react-google-charts";
// // import "../assets/css/style.css"

// // const Recharts = () => {
// //   const data = [
// //     ["Year", "2023", "2022"],
// //     ["Jan", 10000, 400],
// //     ["Feb", 1170, 460],
// //     ["Mar", 660, 1120],
// //     ["Apr", 1030, 540],
// //     ["May", 1030, 540],
// //     ["Jun", 900000, 540],
// //     ["Jul", 700000, 540],
// //     ["Aug", 1030, 1200],
// //     ["Sep", 1030, 540],
// //     ["Oct", 1030, 540],
// //     ["Nov", 1030, 540],
// //     ["Dec", 1030, 540],
// //   ];
// //   const options = {
// //     title: "Total Spending YTD",
    
// //   };
  
    

  
// //   return (
// //     <>
// //       <section>
// //         <div className='max-w-7xl mx-auto py-4'>
// //           <Chart
// //         className='text-red-500'
// //       chartType="Bar"
// //       width="800px"
// //       height="400px"
// //       data={data}
// //       options={options}
// //           />
// //           </div>
// //       </section>
       
// //     </>
// //   )
// // }

// // export default Recharts


import React from 'react';
import { Chart } from 'react-google-charts';
import '../assets/css/style.css';


const Recharts = () => {
  const data = [
    ['Year', '2023', '2022'],
    ['Jan', 10000, 100000],
    ['Feb', 117000, 460000],
    ['Mar', 660000, 130000],
    ['Apr', 103000, 540000],
    ['May', 103050, 540500],
    ['Jun', 900000, 540600],
    ['Jul', 700000, 540800],
    ['Aug', 1030900, 120000],
    ['Sep', 103012, 540600],
    ['Oct', 103000, 540800],
    ['Nov', 1030900, 540000],
    ['Dec', 103040, 540600],
  ];

  const options = {
    chart: {
      title: 'Total Spending YTD',
      titleTextStyle: {
        bold: true,
        colors: "red",
        // Chart title
      },
    },
    legend: { position: 'right', alignment:'center' },
    
    colors: ['#0092CF', '#C8A200'], // Color customization for bars
    hAxis: {
      title: 'Year',
      titleTextStyle: {
        bold: true,
        colors:"#ffffff"
      }
  }

 
   
    };


  return (
    <>
      <section>
        <div className='max-w-7xl mx-auto py-4 '>
          <Chart
            className='bg-white'
            chartType='Bar'
            height='500px'
            data={data}
            options={options}
            style={{ fontFamily: 'Barlow Condensed, sans-serif',fontWeight:700,color:'red'}}
            // {colors}
            // {height}
          />
        </div>
      </section>
    </>
  );
};

export default Recharts;




