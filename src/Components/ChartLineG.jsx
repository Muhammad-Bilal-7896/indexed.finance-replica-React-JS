import React from 'react';

import { Line, defaults } from 'react-chartjs-2';

import '../Styling/Chart.css';

defaults.global.tooltips.enabled = true;
defaults.global.legend.display = false;

defaults.line.spanGaps = true;

let data = {
    datasets: [{
        data: [
            35,
            33,
            36,
            23,
            30,
            27,
            25,
            28,
            38,
            40
        ],

        backgroundColor: [
            '#ffa500',
        ],
        borderColor: [
            '#ffa500',
        ],
        label: 'The First Data Set : 1',
        pointRadius: 6,
        fill: true
    },
    {
        data: [
            78,
            23,
            56,
            78,
            23,
            78,
            23,
            78,
            34,
            65
        ],

        backgroundColor: [
            '#66ffff',
        ],
        borderColor: [
            '#66ffff',
        ],
        label: 'The First Data Set : 2',
        pointRadius: 6,
        fill: true
    },
    {
        data: [
            45,
            67,
            56,
            34,
            23,
            -18,
            78,
            -25,
            23,
            -28
        ],

        backgroundColor: [
            '#00e79a',
        ],
        borderColor: [
            '#6ef1c5',
        ],
        label: 'The First Data Set : 1',
        pointRadius: 6,
        fill: true
    }
    ],
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Chart with Multiline Labels'
        },
    },
    labels: ['OMG', 'MKR', 'UMA', 'YFI', 'CRU', 'SNX', 'COMP', 'AAVE', 'UNI', 'LINK'],
};

let chartOptions = {
    legend: {
        display: true,
        position: 'right',
        labels: {
            boxWidth: 80,
            fontColor: '#66ffff'
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

const ChartLineG = () => {
    return (
        <div>
            <Line
                data={data}
                // width={300}
                // height={80}
                // options={chartOptions}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}
export default ChartLineG;