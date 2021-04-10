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

import '../Styling/SubTextInput.css';




const SubTextInput = (props) => {


    useEffect(() => {

    })

    return (
        <div>
            <label htmlFor="" style={{marginLeft:"20px"}}>{props.label}</label>
            <div className="text-input-container-sub">
                <input type="text" placeholder={props.placeholder} className="form-control input_TEXT_TEXT_COMPONENT_SUB" />
                <h5 className="txt-container-right-input-sub">{props.rightText}</h5>
            </div>
        </div>
    )
}
export default SubTextInput;
