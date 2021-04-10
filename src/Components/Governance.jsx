import React, { useEffect, useState } from 'react';

// All the components import is here
import Header from './Header';
import Footer from './Footer';
import Proposals from './Proposals';
// All the components import is here

import ChartLineG from './ChartLineG';

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import '../Styling/Governance.css';

import { connect } from "react-redux";

const Governance = (props) => {

    const [initialiseBool, setInitialiseBool] = useState(false);

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
                    <div className="col-md-5">
                        <div className="balanceNDX">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="g-head-top">BALANCE: NDX</h4>

                                        {/* If Key is true show else hide */}
                                        {(props.SET_KEY) ? (
                                            <div>
                                                <h5 className="g-head-below">STATUS: <span className="text-green">&ensp;INACTIVE</span></h5>

                                                {(initialiseBool) ? (
                                                    <div>
                                                        <h6 className="g-co">Delegate your votes to another address:</h6>
                                                        <input className="form-control delegate_input" placeholder="ADDRESS" type="text" />
                                                        <div className="d-flex">
                                                            <a className="btn InitializebtnGovernanceDelegate" onClick={() => setInitialiseBool(false)}>GO BACK</a>
                                                            <a className="btn InitializebtnGovernanceDelegate">DELEGATE</a>
                                                        </div>
                                                    </div>
                                                ) : (
                                                        <div>
                                                            <h6 className="g-co">You have not setup your wallet for voting yet, either for individual voting, or delegation.</h6>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="d-flex">
                                                                        <p className="radio-label">INDIVIDUAL </p>
                                                                        <div>
                                                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultChecked defaultValue aria-label="..." />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="d-flex">
                                                                        <p className="radio-label">DELEGATION </p>
                                                                        <div>
                                                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultChecked defaultValue aria-label="..." />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <a className="btn btn-block InitializebtnGovernance" onClick={() => setInitialiseBool(true)}>INITIALISE</a>
                                                        </div>
                                                    )}
                                            </div>
                                        ) : (
                                                <div>
                                                    <h5 className="g-head-below">STATUS:</h5>
                                                    <h6 className="text-center g">Connect your web3 provider to continue</h6>
                                                </div>
                                            )}
                                        {/* If Key is true show else hide */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="tvchart">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4 className="g-head-top">TOTAL VOTERS: 86</h4>
                                        <h5 className="g-head-below">NDX: $0.00</h5>
                                    </div>
                                </div>
                            </div>
                            <ChartLineG />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Proposals />
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

export default connect(mapStateToProps, null)(Governance);