import React from 'react';

import { Line, defaults,Chart } from 'react-chartjs-2';

import '../Styling/Chart.css';

defaults.global.tooltips.enabled = true;
defaults.global.legend.display = false;


defaults.line.spanGaps = true;

let data = {
    datasets: [{
        data: [
            45,
            67,
            56,
            34,
            23,
            18,
            78,
            25,
            23,
            28
        ],

        backgroundColor: [
            '#fff9ed',
        ],
        borderColor: [
            '#ffa500',
        ],
        label: 'The First Data Set : 1',
        pointRadius: 6,
        fill: true
    }],
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'A statistical chart here'
        },
        legend: {
            display: false
        }
    },
    labels: ['$5', '$67', '$45', '$45', '$43', '$4', '$43', '$4', '$6', '$4'],
};

let chartOptions = {
    legend: {
        display: false,
        position: 'right',
        labels: {
            boxWidth: 80,
            fontColor: '#66ffff',
        }
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
                color: "#66ffff"
            },
            scaleLabel: {
                display: false,
                labelString: "Time in Seconds",
                fontColor: "red"
            }
        }],
        yAxes: [{
            gridLines: {
                display: false,
                color: "#66ffff",
                borderDash: [2, 5],
            },
            scaleLabel: {
                display: false,
                labelString: "Speed in Miles per Hour",
                fontColor: "green"
            }
        }]
    }
};

const ChartLinePoolDetails = () => {
    return (
        <div>
            <Line
                data={data}
                // width={300}
                 height={80}
                options={chartOptions}
               
            />
        </div>
    )
}
export default ChartLinePoolDetails;