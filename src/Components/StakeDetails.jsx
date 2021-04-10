import React, { useEffect, useState } from 'react';

// All the components import is here
import Header from './Header';
import Footer from './Footer';
// All the components import is here

import ChartLineG from './ChartLineG';

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import '../Styling/StakeDetails.css';

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

const StakeDetails = () => {

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
            <br /><br />

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="stakedetailsContainer">
                            <div className="firstrowstackdetails">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">

                                            <h5 className="earnedRewardsSD">EARNED REWARDS</h5>

                                            <h2 className="ndxSD">0 NDX</h2>
                                            <h5 className="earnedRewardsSD">STAKED: 0.00 DEFI5 <br />
                                            RATE: 0.00 NDX/DAY</h5>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-3 col-sm-6">
                                                        <button disabled={true} className="btn sd-upper-block-btn">CLAIM</button>
                                                    </div>
                                                    <div className="col-md-3 col-sm-6">
                                                        <button disabled={true} className="btn sd-upper-block-btn">EXIT</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="secondrowstackdetails">
                                <fieldset>
                                    <legend>DEFI5</legend>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="container">
                                                    <br />
                                                    <div className="row">
                                                        <div className="col-md-2">
                                                            <img className="ssdImages" src={img1} alt="" />
                                                            <img className="ssdImages" src={img2} alt="" />
                                                            <img className="ssdImages" src={img3} alt="" />
                                                            <img className="ssdImages" src={img4} alt="" />
                                                        </div>
                                                        <div className="col-md-10">
                                                            <div>
                                                                <input type="text" id="formControlLg" placeholder="AMOUNT" className="form-control sdinput" />
                                                                <label className="form-label sdinput" htmlFor="formControlLg">&nbsp;&nbsp; BALANCE : 0 </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div className="row">
                                                        <div className="col-md-9">
                                                            <h6>EST REWARD: 0 NDX/DAY</h6>
                                                            <h6>POOL WEIGHT: 0%</h6>
                                                        </div>
                                                        <div className="col-md-3">
                                                            <div className="btn stake-btn">
                                                                CONNECT
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <br />
                            <div className="firstrowstackdetails">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <br />
                                            <div className="container">
                                                <div className="row">

                                                    <div className="col-md-6">

                                                        <h5 className="lastSDRowLeft">REWARDS POOL:</h5>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowRight">0x11bf...b586</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowLeft">STAKING ENDS:</h5>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowRight">Mar 8, 2021, 1:58 PM UTC</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowLeft">STAKED DEFI5:</h5>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowRight">210,307.05</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowLeft">NDX PER DAY:</h5>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowRight">9,374.99</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowLeft">TOTAL NDX:</h5>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowRight">562,500</h5>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowLeft">STAKING TOKEN:</h5>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <h5 className="lastSDRowRight">DEFI5</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
export default StakeDetails;
