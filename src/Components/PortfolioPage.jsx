import React, { useEffect } from 'react';

// All the components import is here
import Header from './Header';
import Footer from './Footer';

// All the components import is here

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

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import '../Styling/PortfolioPage.css';

const PortfolioPage = () => {

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
                        <div className="portfolio_value">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="p-head-top">PORTFOLIO VALUE</p>
                                        <h1 className="p-head-below">$0</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="p_total_ndx">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <p className="p-head-top">NDX</p>
                                        <h1 className="p-head-below">TOTAL: 0 NDX</h1>
                                        <p className="p-head-top-below">BALANCE: 0 NDX</p>
                                        <p className="p-head-top-below">EARNED: 0 NDX</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <form>
                        <fieldset>
                            <legend>PORTFOLIO</legend>
                            {/* table here   */}
                            <div className="table-responsive">
                                <table className="table">
                                    <tbody>
                                        <tr className="trrow">
                                            <th scope="row">
                                                <img width={35} src={img9} alt="" />
                                                <img width={35} style={{ paddingTop: "20px" }} src={img2} alt="" />
                                            </th>
                                            <td>
                                                <span className="UNIV2">UNIV2:ETH-DEFI5</span>
                                            </td>
                                            <td>
                                                <div className="sub-progress-text-up">BALANCE: 0</div>
                                                <div className="sub-progress-text-up">STAKING: 0</div>

                                            </td>
                                            <td>
                                                <div className="potfolio-progress">
                                                    <div className="progress propsal-progress-container">
                                                        <div className="progress-bar propsal-progress-SubcontainerUpper" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>$0</span>
                                            </td>
                                        </tr>
                                        <tr className="trrow">
                                            <th scope="row">

                                                <img width={35} src={img1} alt="" />

                                                <img width={35} style={{ paddingTop: "20px" }} src={img4} alt="" />

                                            </th>
                                            <td>
                                                <span className="UNIV2">UNIV2:ETH-CC10</span>
                                            </td>
                                            <td>
                                                <div className="sub-progress-text-up">BALANCE: 0</div>
                                                <div className="sub-progress-text-up">STAKING: 0</div>
                                            </td>
                                            <td>
                                                <div className="potfolio-progress">
                                                    <div className="progress propsal-progress-container">
                                                        <div className="progress-bar propsal-progress-SubcontainerUpper" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>$0</span>
                                            </td>
                                        </tr>
                                        <tr className="trrow">
                                            <th scope="row">
                                                <img width={35} src={img7} alt="" />
                                            </th>
                                            <td>
                                                <span className="UNIV2">DEFI5</span>
                                            </td>
                                            <td>
                                                <div className="sub-progress-text-up">BALANCE: 0</div>
                                                <div className="sub-progress-text-up">STAKING: 0</div>
                                            </td>
                                            <td>
                                                <div className="potfolio-progress">
                                                    <div className="progress propsal-progress-container">
                                                        <div className="progress-bar propsal-progress-SubcontainerUpper" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>$0</span>
                                            </td>
                                        </tr>
                                        <tr className="trrow">
                                            <th scope="row">
                                                <img width={35} src={img8} alt="" />
                                            </th>
                                            <td>
                                                <span className="UNIV2">CC10</span>
                                            </td>
                                            <td>
                                                <div className="sub-progress-text-up">BALANCE: 0</div>
                                                <div className="sub-progress-text-up">STAKING: 0</div>
                                            </td>
                                            <td>
                                                <div className="potfolio-progress">
                                                    <div className="progress propsal-progress-container">
                                                        <div className="progress-bar propsal-progress-SubcontainerUpper" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span>$0</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* table here */}
                        </fieldset>
                    </form>
                </div>
            </div >
            {/* The Footer Component */}
            < Footer />
            {/* The Footer Component */}
        </div >
    )
}
export default PortfolioPage;