import React from 'react';

import { Pie,defaults } from 'react-chartjs-2';

import '../Styling/Chart.css';

import {connect} from "react-redux";



defaults.global.tooltips.enabled = true;
defaults.global.legend.display=false;


const ChartPie = (props) => {
    return (
        <div>
            <Pie
                data={props.SET_DATA.PieChartData}
                width={200}
                height={200}
                options={{ maintainAspectRatio: false }}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({
    SET_DATA: state.app.SET_DATA
})
export default connect(mapStateToProps, null)(ChartPie);