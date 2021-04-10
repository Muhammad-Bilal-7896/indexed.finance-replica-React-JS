import React, { useEffect } from 'react';

import { Link } from "react-router-dom";

// All the components import is here
import Header from './Header';
import IndexPools from "./IndexPools";
import ChartPie from './ChartPie';
import ChartLine from './ChartLine';
import Footer from './Footer';
// All the components import is here

// All the external libraires imoprt is here
import { connect } from "react-redux";
import { setCurrentTheme } from '../store/action/index';
// All the external libraires imoprt is here

import symbol from '../UI/symbol.JPEG XR';
import symbol2 from '../UI/symbol-2.JPEG XR';
import '../Styling/Home.css';

const Home = (props) => {

    useEffect(() => {

    })

    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <br /><br /><br /><br />

            {/* The Marquee tag */}
            <div className="marquee">
                <p>
                    <a href="#"><span className="purple">PROPOSAL 0x4:</span> ENABLE META-GOVERNANCE FOR UNI & COMP</a>

                    <a href="#" className="CC10TextStyle">CC10 $79.75 <span className="green">(+0.16%)</span></a>

                    <a href="#" className="CC10TextStyle">DEFI5 $107.74 <span className="darkpink">(-4.6%)</span></a>


                    <span className="CC10TextStyle">  TOTAL VALUE LOCKED: $69,384,698.884  &emsp;&emsp;    24H VOLUME: $4,422,870.0
                      </span>
                </p>
            </div>
            {/* The Marquee tag */}

            <div className="container-own">
                <div className="parent-block">
                    <div className="left-block">
                        <div className="right-upper-block">
                            <div className="right-upper-inside-left">


                                {(props.SET_THEME == "dark") ? (
                                    <img width="50" src={props.SET_DATA.symbol2} alt="symbol" />
                                ) : (
                                    <img width="50" src={props.SET_DATA.symbol} alt="symbol" />
                                )}


                            </div>
                            <div className="right-upper-inside-right">
                                <div className="right-upper-inside-right-inside">
                                    {props.SET_DATA.Title}
                                </div>
                                <div className="right-upper-inside-right-inside-lower">
                                    {props.SET_DATA.price}  <span className="darkpink">{props.SET_DATA.percentage}</span>
                                </div>
                            </div>
                        </div>
                        <div className="right-lower-block">
                            <ChartLine />
                        </div>
                    </div>
                    <div className="right-block">
                        <div className="right-block-inside-left">
                            <div id="pieChartStyle">
                                <ChartPie />
                            </div>
                        </div>

                        <div className="right-block-inside-right">
                            <ul className="ullistright-parent">
                                <li>
                                    <ul className="ullistright-parent-child grey">
                                        <li>ADDRESS:</li>
                                        <li>SUPPLY:</li>
                                        <li>VOLUME:</li>
                                        <li>TVL:</li>
                                    </ul>
                                </li>
                                <li>
                                    <ul className="ullistright-parent-child">
                                        <li>{props.SET_DATA.Address}</li>
                                        <li>{props.SET_DATA.Supply}</li>
                                        <li>{props.SET_DATA.Volume}</li>
                                        <li>{props.SET_DATA.TVL}</li>
                                        <li><Link to="/index/details" className="btn btn-block expandbtnHomes">Expand</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Index Pool components is here */}
                <br />
                <IndexPools />
                {/* Index Pool components is here */}

            </div>
            {/* The Footer Component */}
            <Footer />
            {/* The Footer Component */}
        </div>
    )
}
const mapStateToProps = (state) => ({
    SET_THEME: state.app.SET_THEME,
    SET_DATA: state.app.SET_DATA
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setCurrentTheme: (data) => dispatch(setCurrentTheme(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Home);
