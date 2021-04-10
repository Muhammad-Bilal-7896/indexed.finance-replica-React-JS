import React, { useEffect } from 'react';

// All the components import is here
// All the components import is here

import { Link,useHistory } from "react-router-dom";

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import '../Styling/StakeSubDiv.css';

import img1 from '../UI/CC 1.JPEG XR'
import img2 from '../UI/CC 2.JPEG XR'
import img3 from '../UI/CC 3.JPEG XR'
import img4 from '../UI/CC 4.JPEG XR'

const StakeSubDiv = () => {

    const history = useHistory();
    const handleRowClick = () => {
        history.push('/stake/details');
    }

    useEffect(() => {

    })

    return (
        <div  className="container stake-subcontainer-container">
            <div onClick={()=> handleRowClick()} className="row">
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
                                <h4 className="stake-sub-index-head">Cryptocurrency Top 10 Index [CC10]</h4>
                                <h6 className="stake-sub-index-sub">STAKED : 255,204.142 CC10  <span className="ssd-apy">APY: 285.74%</span> </h6>
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <div className="col-md-9">
                                <h5>RATE : 9374.00 NDX/DAY</h5>
                                <h5>TOTAL: 562,500 NDX</h5>
                            </div>
                            <div className="col-md-3">
                                <Link to="/stake/details" className="btn stake-btn">
                                    STAKE
                                </Link>
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StakeSubDiv;