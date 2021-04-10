import React, { useEffect, useState } from 'react';

// All the components import is here
import Header from './Header';
import Footer from './Footer';
// All the components import is here

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import '../Styling/GovernanceDetails.css';

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

const GovernanceDetails = () => {

    const [radio, setRadio] = useState(1)
    const [radio1, setRadio1] = useState(0)

    useEffect(() => {

    })

    const onClick = nr => () => {
        setRadio(nr)
    };

    const onClick1 = nr => () => {
        setRadio1(nr)
    };

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
                    <div className="col-md-7">
                        <div className="firstrowstackdetails">
                            <img src={img3} className="gdimglogo" width={80} alt="" />
                            <br />
                            <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <button disabled={true} className="btn btn-active-gd bg-green">ACTIVE</button>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>0x9d31...abb5 • <span className="blue">11896934</span></h4>
                                    </div>
                                </div>
                                <div className="row">
                                    <br />
                                    <h2 className="gdhead">Transfer 600,000 NDX to Sigma Committee Timelock</h2>
                                </div>
                            </div>

                            <br />

                            <div className="gdProgressBarDiv">
                                <br />
                                <div className="row">
                                    <div className="col-md-2">
                                        <h6 className="for-gd">FOR</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress progressUpperOutsideGD">
                                            <div className="progress-bar progressUpperInsideGD" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <h5 className="value-gd">11,602.03 NDX</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-2">
                                        <h6 className="for-gd">AGAINST</h6>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="progress progressLowerOutsideGD">
                                            <div className="progress-bar progressLowerInsideGD" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <h5 className="value-gd">0 NDX</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <fieldset>
                            <legend>DETAILS</legend>
                            <div className="container">
                                <div className="row">
                                    <div className="left-top-link-gd-div">
                                        <a className="left-top-link-gd" href=""><div id="some">0x86772b1409b61c639eaac9ba0acfbb6e238e5f83</div></a>
                                        .transfer(address <br /> ,uint256) {`{ }`}
                                    </div>

                                    <div className="div-lower-left-details-gd">
                                        <br />
                                        <h1 className="gd-left-details">Transfer 600,000 NDX to Sigma Committee Timelock</h1>
                                        Approved Sigma Proposal: <br />
                                        <a className="left-top-link-gd" href="https://gov.indexed.finance/#/ndx.eth/proposal/QmbneygJdeXFNzxrtVw7CTZAgLUwPBfxrCBzucefuWC1Q8">
                                            <div id="some">https://gov.indexed.finance/#/ndx.eth/proposal/QmbneygJdeXFNzxrtVw7CTZAgLUwPBfxrCBzucefuWC1Q8</div>
                                        </a>

                                        Committee Selection Poll:&ensp; <a className="left-top-link-gd" href="https://forum.indexed.finance/t/sigma-committee-selection-poll/205">
                                            <div id="some">https://forum.indexed.finance/t/sigma-committee-selection-poll/205</div>
                                        </a>

                                        Discussion Thread: <a className="left-top-link-gd" href="https://forum.indexed.finance/t/transfer-600-000-ndx-to-sigma-committee-timelock/403">
                                            <div id="some">https://forum.indexed.finance/t/transfer-600-000-ndx-to-sigma-committee-timelock/403</div>
                                        </a>

                                        <h3 className="summary-gd">Summary</h3>
                                        This proposal will begin the Sigma pilot program approved by the community by transferring the 600,000 NDX to the committee timelock detailed in the original Sigma proposal.

                                        <h3 className="summary-gd">Timelock Overview</h3>
                                        The committee timelock will hold 600,000 NDX, and will allow the Sigma committee to allocate rewards for new liquidity mining programs. <br />
                                        As detailed in the original proposal, the timelock allows the Sigma committee to assign staking rewards while ensuring that Indexed governance is able to replace the committee, reclaim the allocated tokens or veto specific allocations. <br />
                                        The timelock allows the Sigma committee's Gnosis safe to queue token transfers, which will be delayed for 7 days before executing. This gives Indexed governance the ability to assess allocations and veto them if desired. The timelock also allows Indexed governance to replace the Sigma committee or reclaim the remaining tokens. <br />
                                        Committee Timelock Contract: <br />
                                        <a className="left-top-link-gd" href="https://etherscan.io/address/0x9BF4bE02414568eb481F448149432c6863737966">
                                            <div id="some">https://etherscan.io/address/0x9BF4bE02414568eb481F448149432c6863737966</div>
                                        </a>
                                        <br />
                                        Committee Gnosis Safe: <br />
                                        <a className="left-top-link-gd" href="https://gnosis-safe.io/app/#/safes/0xBb22A47842EaFc967213269280509A8B28e57076">
                                            <div id="some">https://gnosis-safe.io/app/#/safes/0xBb22A47842EaFc967213269280509A8B28e57076</div>
                                        </a>
                                        <br />
                                        <h3 className="summary-gd">Code Review</h3>
                                        A code review was conducted by Daniel Luca and Andrei Simion over the course of 3 days to evaluate the overall access control system, the committee timelock and committee proxy contracts, and some minor changes to other proxy contracts which will be used for the next pool controller. <br />
                                        The review found one medium issue, three minor issues and one informational issue. The medium issue involved the voting period on GovernorAlpha and user expectations about when a proposal would finish; we'll resolve this by adding links to block countdowns on Etherscan to the governance proposal pages. The minor issues had to do with external event tracking & readability, and they were addressed with small contract updates. The informational issue was considered expected behavior and was not addressed. <br />
                                        The full code review can be found here: <br />
                                        <a className="left-top-link-gd" href="https://raw.githubusercontent.com/monoceros-alpha/review-indexed-sigmacommittee-2021-02/master/Report.pdf">
                                            <div id="some">https://raw.githubusercontent.com/monoceros-alpha/review-indexed-sigmacommittee-2021-02/master/Report.pdf</div>
                                        </a> <br />
                                        <h3 className="summary-gd">Committee Members</h3>
                                        The members of the committee are:
                                        <div className="row">
                                            <div className="col-md-3">
                                                <ul className="list-style-none">
                                                    <li className="gd-ullistHeading">
                                                        Forum Username
                                                    </li>
                                                    <li>@d1ll0n</li>
                                                    <li>@litocoen</li>
                                                    <li>@Norsefire</li>
                                                    <li>@Strategy</li>
                                                    <li>@blurr</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-3">
                                                <ul className="list-style-none">
                                                    <li className="gd-ullistHeading">Appointed By</li>
                                                    <li>Team</li>
                                                    <li>Team</li>
                                                    <li>Community</li>
                                                    <li>Community</li>
                                                    <li>Community</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="list-style-none">
                                                    <li className="gd-ullistHeading">
                                                        Address
                                                    </li>
                                                    <br />
                                                    <li className="some">0x236ECcAB8cdcfEDb099dE85c4060024bA3cE4d46</li>
                                                    <li className="some">0x330F1997C9bBC66bE5f1A3B0f2F6403051Ea57Be</li>
                                                    <li className="some">0x000000000057E8ABd581828A2b40076852C0bA6E</li>
                                                    <li className="some">0x2c87C3ac0DE22076eca02dB7C66938fCAcB7035e</li>
                                                    <li className="some">0xef764BAC8a438E7E498c2E5fcCf0f174c3E3F8dB</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                    </div>
                    <div className="col-md-5">
                        <div className="firstrowstackdetails">
                            <br />
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <p className="radio-label">FOR</p>
                                            <div>
                                                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" defaultChecked defaultValue aria-label="..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="d-flex">
                                            <p className="radio-label">AGAINST</p>
                                            <div>
                                                <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2" defaultValue aria-label="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <h5>WEIGHT: NaN NDX</h5>
                                </div>
                                <div className="row">
                                    <h5>IMPACT: <b><span className="green">%</span></b></h5>
                                </div>
                                <div className="row">
                                    <button className="btn votebtnGD">VOTE</button>
                                </div>
                            </div>
                        </div>
                        <fieldset>
                            <legend>VOTES</legend>
                            <div className="gd-righttable-div">
                                <table className="table-w100">
                                    <tbody>
                                        <tr className="tr-votes-table">
                                            <td>
                                                <img className="votes-gd-img" src={img2} width={50} alt="" />
                                            </td>
                                            <td>
                                                <span>0x6c3e . . . 3c91</span>
                                                <p className="green">+ 15 , 516 . 81 NDX &ensp;</p>
                                            </td>
                                        </tr>
                                        <tr className="tr-votes-table">
                                            <td>
                                                <img className="votes-gd-img" src={img7} width={50} alt="" />
                                            </td>
                                            <td>
                                                <span>0x59e4 . . . 7d4a</span>
                                                <p className="green">0 NDX &ensp;</p>
                                            </td>
                                        </tr>
                                        <tr className="tr-votes-table">
                                            <td>
                                                <img className="votes-gd-img" src={img4} width={50} alt="" />
                                            </td>
                                            <td>
                                                <span>0x6c3e . . . 3c91</span>
                                                <p className="green">+ 15 , 516 . 81 NDX &ensp;</p>
                                            </td>
                                        </tr>
                                        <tr className="tr-votes-table">
                                            <td>
                                                <img className="votes-gd-img" src={img7} width={50} alt="" />
                                            </td>
                                            <td>
                                                <span>0x6c3e . . . 3c91</span>
                                                <p className="green">+ 15 , 516 . 81 NDX &ensp;</p>
                                            </td>
                                        </tr>
                                        <tr className="tr-votes-table">
                                            <td>
                                                <img className="votes-gd-img" src={img1} width={50} alt="" />
                                            </td>
                                            <td>
                                                <span>0x6c3e . . . 3c91</span>
                                                <p className="green">+ 15 , 516 . 81 NDX &ensp;</p>
                                            </td>
                                        </tr>
                                        <tr className="tr-votes-table">
                                            <td>
                                                <img className="votes-gd-img" src={img9} width={50} alt="" />
                                            </td>
                                            <td>
                                                <span>0x6c3e . . . 3c91</span>
                                                <p className="green">+ 15 , 516 . 81 NDX &ensp;</p>
                                            </td>
                                        </tr>
                                        <tr className="tr-votes-table">
                                            <td>
                                                <img className="votes-gd-img" src={img8} width={50} alt="" />
                                            </td>
                                            <td>
                                                <span>0x6c3e . . . 3c91</span>
                                                <p className="green">+ 15 , 516 . 81 NDX &ensp;</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            {/* The Footer Component */}
            <Footer />
            {/* The Footer Component */}
        </div>
    )
}
export default GovernanceDetails;
