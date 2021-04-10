import React from 'react';
import { Line, defaults } from 'react-chartjs-2';
import '../Styling/Chart.css';

import {connect} from "react-redux";

defaults.global.tooltips.enabled = true;
defaults.global.legend.display = false;

defaults.line.spanGaps = true;


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
          display:false,
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
  
const ChartLine = (props) => {
    return (
        <div>
            <Line
                data={props.SET_DATA.lineChartData}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
  SET_DATA: state.app.SET_DATA
})
export default connect(mapStateToProps, null)(ChartLine);