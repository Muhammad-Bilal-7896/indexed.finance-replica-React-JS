import React, { useEffect, useState } from 'react';

// All the components import is here
import Header from './Header';
import Footer from './Footer';
// All the components import is here

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import symbol from '../UI/symbol.JPEG XR';
import symbol2 from '../UI/symbol-2.JPEG XR';

import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

import '../Styling/TextInput.css';



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
import InputButton from './InputButton';

const TextInput = (props) => {


    useEffect(() => {

    })

    return (
        <div id="textInputUnique">
            <label htmlFor="" style={{marginLeft:"20px"}}>{props.label}</label>
            <div className="text-input-container">
                <input type="text" placeholder={props.placeholder} className="form-control input_TEXT_TEXT_COMPONENT" />
                <h5 className="txt-container-right-input">{props.rightText}</h5>
            </div>
        </div>
    )
}
export default TextInput;
