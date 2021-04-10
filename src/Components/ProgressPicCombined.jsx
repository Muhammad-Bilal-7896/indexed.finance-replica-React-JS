import React, { useEffect, useState } from 'react';

// All the external libraires imoprt is here
// All the external libraires imoprt is here


import '../Styling/ProgressPicCombined.css';

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

import { connect } from "react-redux";

import { useHistory } from "react-router-dom";


const ProgressPicCombined = (props) => {

    useEffect(() => {

    })

    return (
        <div>
            {/* All the small cards you can make a separate components */}
            <div className="content-center">
                <div className="displayFlex">
                    <div>
                        <img src={props.src} className="IDImageMarginTop" width={50} alt="" />
                    </div>
                    <div className="containerProgressBarsID">

                        <h5 className="containerProgressBarsTopTxt">{props.progressUp}</h5>
                        <div className="progress IDProgressBarContainer2">
                            <div className="progress-bar IDProgressBarSubContainer bg-greenShade" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <div className="containerProgressBarsBottomTxt">{props.progressBottom}</div>
                    </div>
                </div>
            </div>
            {/* All the small cards you can make a separate components */}
        </div>
    )
}
const mapStateToProps = (state) => ({
    SET_KEY: state.app.SET_KEY,
})
export default connect(mapStateToProps, null)(ProgressPicCombined);
