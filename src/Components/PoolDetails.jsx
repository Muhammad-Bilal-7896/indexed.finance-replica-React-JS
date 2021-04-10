import React, { useEffect, useState } from 'react';

// All the components import is here
import Header from './Header';
import Footer from './Footer';
// All the components import is here

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import '../Styling/PoolDetails.css';

import { connect } from "react-redux";

import ChartLinePoolDetails from "./ChartLinePoolDetails";
import ProgressPicCombined from "./ProgressPicCombined";

import img1 from '../UI/CC 1.JPEG XR'
import img2 from '../UI/CC 2.JPEG XR'
import img3 from '../UI/CC 3.JPEG XR'
import img4 from '../UI/CC 4.JPEG XR'
import img5 from '../UI/CC 5.JPEG XR'
import img6 from '../UI/CC 6.JPEG XR'
import img7 from '../UI/CC 7.JPEG XR'
import img8 from '../UI/CC 8.JPEG XR'
import img9 from '../UI/CC 9.JPEG XR'
import img10 from '../UI/CC 10.JPEG XR'

const PoolDetails = (props) => {

    useEffect(() => {

    })

    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>

            <br /><br /><br /><br /><br /><br />

            <div className="container-own">
                <div className="row">
                    <div className="col-md-7">
                        <div className="row">
                            <div className="dindexPoolDetails">
                                <h1 className="left-head-index-pools">DEGEN Index [DEGEN]</h1>
                                <h6 className="text-grey-pd">0X126C . . . C855</h6>

                                <ChartLinePoolDetails />

                                <div className="div-below-graph-pd">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5 className="txt-div-below-graph-pd">MARKETCAP: $6,595,709.8</h5>
                                            </div>
                                            <div className="col-md-6">
                                                <h5 className="txt-div-below-graph-pd">VOLUME: $446,796.09</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="eventsSidePoolDetailsRow">
                                <form>
                                    <fieldset style={{ border: "none", marginTop: "0px" }}>
                                        <legend>EVENTS</legend>
                                        {/* table here   */}
                                        <table style={{ width: "100%" }}>
                                            <tbody>
                                                <tr>
                                                    <td scope="row">
                                                        <h6 className="table-event-pd-row">BLOCK</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="table-event-pd-row">AMOUNT</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="table-event-pd-row">TYPE</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className="table-event-pd-row transaction">TRANSACTION</h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <br />

                                        {/* table here */}
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="balancesPoolDetails">
                                    <form>
                                        <fieldset style={{ border: "none" }}>
                                            <legend className="legendPoolDetails">BALANCES</legend>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                        <h5>Degen :</h5>
                                                        <h5>UNIV2-ETH-DEGEN:</h5>
                                                    </div>
                                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                        <h5 className="ml-pd">0.00</h5>
                                                        <h5 className="ml-pd">0.00</h5>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="d-flex">
                                                            <button className="btn pool-btn">ADD LIQUIDITY</button>
                                                            <button className="btn pool-btn">REMOVE LIQUIDITY</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <form>
                                    <fieldset>
                                        <legend>ASSETS</legend>
                                        {/* table here   */}
                                        <div style={{ maxHeight: "300px" }} className="table-responsive">
                                            <ProgressPicCombined src={img3} progressUp="THORChain ETH.RUNE [RUNE]" progressBottom="191,670.908 RUNE ≈ $1,037,784.416" />
                                            <ProgressPicCombined src={img1} progressUp="Republic Token [REN]" progressBottom="877,712.727 REN ≈ $960,406.262" />
                                            <ProgressPicCombined src={img4} progressUp="Reserve Rights [RSR]" progressBottom="11,900,375.058 RSR ≈ $709,338.584" />
                                            <ProgressPicCombined src={img9} progressUp="Curve DAO Token [CRV]" progressBottom="296,945.433 CRV ≈ $650,145.216" />
                                            <ProgressPicCombined src={img8} progressUp="1INCH Token [1INCH]" progressBottom="155,059.621 1INCH ≈ $614,372.835" />
                                            <ProgressPicCombined src={img2} progressUp="Ocean Token [OCEAN]" progressBottom="569,816.978 OCEAN ≈ $611,785.415" />
                                            <ProgressPicCombined src={img5} progressUp="AlphaToken [ALPHA]" progressBottom="298,673.783 ALPHA ≈ $565,573.847" />
                                            <ProgressPicCombined src={img7} progressUp="Badger [BADGER]" progressBottom="10,433.558 BADGER ≈ $541,299.675" />
                                            <ProgressPicCombined src={img6} progressUp="PolkastarterToken [POLS]" progressBottom="103,198.259 POLS ≈ $464,655.495" />
                                            <ProgressPicCombined src={img10} progressUp="Wrapped MIR Token [MIR]" progressBottom="191,670.908 RUNE ≈ $1,037,784.416" />
                                        </div>
                                        {/* table here */}
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* The Footer Component */}
            <Footer />
            {/* The Footer Component */}
        </div>
    )
}
const mapStateToProps = (state) => ({
    SET_KEY: state.app.SET_KEY,
})

export default connect(mapStateToProps, null)(PoolDetails);