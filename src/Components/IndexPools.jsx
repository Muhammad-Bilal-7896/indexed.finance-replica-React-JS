import React from 'react'

import '../Styling/IndexPools.css';

import { connect } from "react-redux";
import { setDataValue } from '../store/action/index';

import alpha from '../UI/alpha_symbol.JPEG XR'
import alpha2 from '../UI/alpha_symbol2.JPEG XR';

import crypto from '../UI/symbol.JPEG XR';
import crypto2 from '../UI/symbol-2.JPEG XR';


import { Link, useHistory } from "react-router-dom";

function IndexPools(props) {

    const TopData = [
        {
            Title: "Cryptocurrency Top 10 Index [CC10]",
            price: "$80",
            percentage: "(-0.1%)",
            symbol: crypto,
            symbol2:crypto2,
            lineChartData: {
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
                        '#bdfefe',
                    ],
                    borderColor: [
                        '#89ffff',
                    ],
                    label: 'Dataset 1',
                    pointRadius: 6,
                }],
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'A Chart Line for currency'
                    },
                },
                labels: ['OMG', 'MKR', 'UMA', 'YFI', 'CRU', 'SNX', 'COMP', 'AAVE', 'UNI', 'LINK'],
            },
            PieChartData: {
                datasets: [{
                    data: [
                        8,
                        15,
                        10,
                        20,
                        20,
                        18,
                        20,
                        40,
                        40,
                        50
                    ],
                    backgroundColor: [
                        '#a39e9e',
                        '#e5e5e5',
                        '#c1ffff',
                        '#a3ffff',
                        '#84ffff',
                        '#66ffff',
                        '#51cccc',
                        '#3d9999',
                        '#286666',
                        '#143333',
                    ],
                    borderColor: [
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                    ],
                    label: 'Dataset 1'
                }],
                options: {
                    legend: {
                        display: false //This will do the task
                    }
                },
                labels: ['OMG', 'MKR', 'UMA', 'YFI', 'CRU', 'SNX', 'COMP', 'AAVE', 'UNI', 'LINK'],
            },
            Address:"0X17AC . . . ADF3",
            Supply:"393 , 877.81 CC10",
            Volume:"$ 2 , 460 , 316.56",
            TVL:"$ 31 , 510 , 043.09"
        },
        {
            Title: "DEGEN Index [DEGEN]",
            price: "$5.83",
            percentage: "(+8.97%)",
            symbol: alpha,
            symbol2:alpha2,
            lineChartData: {
                datasets: [{
                    data: [
                        90,
                        80,
                        56,
                        23,
                        30,
                        27,
                        25,
                        28,
                        48,
                        78
                    ],

                    backgroundColor: [
                        '#bdfefe',
                    ],
                    borderColor: [
                        '#89ffff',
                    ],
                    label: 'CRYPTO SYMBOL DATA SET',
                    pointRadius: 6,
                }],
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'A Chart Line for currency'
                    },
                },
                labels: ['OMG', 'MKR', 'UMA', 'YFI', 'CRU', 'SNX', 'COMP', 'AAVE', 'UNI', 'LINK'],
            },
            PieChartData: {
                datasets: [{
                    data: [
                        90,
                        120,
                        90,
                        76,
                        30,
                        50,
                        108,
                        80,
                        70,
                        45
                    ],
                    backgroundColor: [
                        '#a39e9e',
                        '#e5e5e5',
                        '#c1ffff',
                        '#a3ffff',
                        '#84ffff',
                        '#66ffff',
                        '#51cccc',
                        '#3d9999',
                        '#286666',
                        '#143333',
                        '#e5e5e5'
                    ],
                    borderColor: [
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)',
                        'rgba(81,81,81,255)'
                    ],
                    label: 'ALPHA SYMBOL DATA SET'
                }],
                options: {
                    legend: {
                        display: false //This will do the task
                    }
                },
                labels: ['RUNE', 'REN', 'RSA', '', 'CRU', 'LINK', 'OCEAN', 'ALPHA', 'BADGER', 'POLS','MIA'],
            },
            Address:"0x126C . . . C855",
            Supply:"1,059,178.36 DEGEN",
            Volume:"$811,276.15",
            TVL:"$6,172,651.64"
        }

    ]


    const history = useHistory();
    const handleRowClick = () => {
        history.push(`/index/details`);
    }

    const changeRowData = (key) => {
       //console.log("Here All the data at the place or key : "+ key + " is equal to the : "+ TopData[key]);
       props.setDataValue(TopData[key]);
    }

    return (
        <form>
            <fieldset>
                <legend>INDEX POOLS</legend>
                {/* table here   */}
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr className="trrow">
                                <th scope="col">NAME</th>
                                <th scope="col">SYMBOL</th>
                                <th scope="col">VALUE</th>
                                <th scope="col">24HR Δ</th>
                                <th scope="col">MARKET CAP</th>
                                <th scope="col">VOLUME</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onMouseOver={() => changeRowData(0)} onClick={() => handleRowClick()}>
                                <th scope="row">Cryptocurrency Top 10 Index</th>
                                <td>CC10</td>
                                <td>$76.39</td>
                                <td className="darkpink">(-1.93%)</td>
                                <td>$30,396,706.71</td>
                                <td>$2,807,072.12</td>
                            </tr>
                            <tr onMouseOver={() => changeRowData(1)} onClick={() => handleRowClick()}>
                                <th scope="row">
                                    DEFI Top 5 Index
                                </th>
                                <td>DEFI5</td>
                                <td>$102.75</td>
                                <td className="darkpink">(-4.9%)</td>
                                <td>$36,293,345.27</td>
                                <td>$1,962,021.62</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* table here */}
            </fieldset>
        </form>
    )
}

const mapStateToProps = (state) => ({
    SET_DATA: state.app.SET_DATA
  })
  //updating the data of the state
  const mapDispatchToProp = (dispatch) => ({
    setDataValue: (data) => dispatch(setDataValue(data)),
  })
  //updating the data of the state
  export default connect(mapStateToProps, mapDispatchToProp)(IndexPools);