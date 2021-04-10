import React from 'react';

import { Line, defaults } from 'react-chartjs-2';

import '../Styling/Chart.css';

defaults.global.tooltips.enabled = true;
defaults.global.legend.display = false;

defaults.line.spanGaps = true;

let data = {
    datasets: [{
        data: [
            30,
            31,
            30,
            31,
            30,
            30,
            30,
            29,
            30,
            30
        ],
        backgroundColor: [
            '#acacac',
        ],
        borderColor: [
            '#acacac',
        ],
        label: 'Dataset 1',
        pointRadius: 5,
    }],
    options: {
      responsive: true,
      title: {
        display: true,
        text: 'A Chart Line for currency'
      },
    },
    labels: ['OMG', 'MKR', 'UMA', 'YFI','CRU','SNX','COMP','AAVE','UNI','LINK'],
};

let chartOptions = {
    legend: {
      display: false,
      position: 'top',
      labels: {
        boxWidth: 80,
        fontColor: '#66ffff'
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          display: true,
          borderDash: [2, 5],
          color: "#b3b3b3"
        },
        scaleLabel: {
          display: true,
          labelString: "A currency estimate",
          fontColor: "black"
        }
      }],
      yAxes: [{
        gridLines: {
          display:true,
          color: "#b3b3b3",
          borderDash: [2, 5],
        },
        scaleLabel: {
          display: true,
          labelString: "Speed in Miles per Hour",
          fontColor: "green"
        }
      }]
    }
};

const IndexDetailsLineChart1 = () => {
    return (
            <Line
                data={data}
                height={100}
                options={chartOptions}
            />
    )
}
export default IndexDetailsLineChart1;