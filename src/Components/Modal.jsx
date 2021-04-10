import React, { useEffect, useState } from 'react';

// All the components import is here

// All the components import is here

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import symbol from '../UI/symbol.JPEG XR';
import symbol2 from '../UI/symbol-2.JPEG XR';

import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink, MDBInput, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";

import '../Styling/IndexDetails.css';


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

import { connect } from "react-redux";
import { setModalValue } from '../store/action/index'

const Modal = (props) => {

    const [swap1dtxt, setSwap1dtxt] = useState("LINK");
    const [swap1dimg, setSwap1dimg] = useState(img7);

    const toggleModal = () => {
        setModalValue(!props.SET_MODAL);
    }


    const changeDropDown1Swap = (txt, img) => {
        setSwap1dimg(img);
        setSwap1dtxt(txt);
    }


    useEffect(() => {

    })

    return (
        <MDBContainer>
            <MDBModal isOpen={props.SET_MODAL} toggle={() => toggleModal()} size="lg" centered>
                <MDBModalHeader toggle={() => toggleModal()}><p className="modalTitle">Uniswap Minter</p></MDBModalHeader>
                <MDBModalBody>
                    <input type="text" id="inputID" placeholder="SEND 00 CC10" className="form-control" />
                    {/* sdadddddddddddddddddddddddddddddddddddddddddddddddd */}
                    <div className="dropdown">
                        <button className="btn btn-input-right-inside-ib" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
                            <div className="d-flex">
                                <img className="img-ib-inside" src={swap1dimg} width={30} alt="" />
                                <p className="text-ib-inside">{swap1dtxt}</p>
                                <div>
                                    <i className="fa fa-caret-down" aria-hidden="true"></i>
                                </div>
                            </div>
                        </button>
                        <ul className="dropdown-menu dropdown-list-in-input-style" aria-labelledby="dropdownMenu2">
                            <li>
                                <InputButton className="dropdown-item" width={30} text="LINK" onClick={() => changeDropDown1Swap("LINK", img7)} src={img7} showArrow={false} />
                            </li>
                            <li>
                                <InputButton className="dropdown-item" width={30} text="UNI" onClick={() => changeDropDown1Swap("UNI", img6)} src={img6} />
                            </li>
                            <li>
                                <InputButton className="dropdown-item" width={30} text="AVE" onClick={() => changeDropDown1Swap("AVE", img5)} src={img5} />
                            </li>
                            <li>
                                <InputButton className="dropdown-item" width={30} text="COMP" onClick={() => changeDropDown1Swap("COMP", img4)} src={img4} />
                            </li>
                            <li>
                                <InputButton className="dropdown-item" width={30} text="SNX" onClick={() => changeDropDown1Swap("SNX", img3)} src={img3} />
                            </li>
                            <li>
                                <InputButton className="dropdown-item" width={30} text="CRV" onClick={() => changeDropDown1Swap("CRV", img2)} src={img2} />
                            </li>
                            <li>
                                <InputButton className="dropdown-item" width={30} text="YFI" onClick={() => changeDropDown1Swap("YFI", img1)} src={img1} />
                            </li>
                            <li>
                                <InputButton className="dropdown-item" width={30} text="UMA" onClick={() => changeDropDown1Swap("UMA", img8)} src={img8} />
                            </li>
                            <li>
                                <InputButton className="dropdown-item" width={30} text="MKR" onClick={() => changeDropDown1Swap("MKR", img9)} src={img9} />
                            </li>
                            <li>
                                <InputButton className="dropdown-item" width={30} text="OMG" onClick={() => changeDropDown1Swap("OMG", img10)} src={img10} />
                            </li>
                        </ul>
                    </div>
                    {/* dsafdddddddddddddddddddddddddddddddddddddddddddddddddddd */}
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={() => toggleModal()}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    )
}
const mapStateToProps = (state) => ({
    SET_KEY: state.app.SET_KEY,
    SET_MODAL: state.app.SET_MODAL
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setModalValue: (data) => dispatch(setModalValue(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Modal);
