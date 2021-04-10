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

import '../Styling/IndexDetails.css';

import Modal from "./Modal";

import IndexDetailsLineChart1 from "../Components/IndexDetailsLineChart1.jsx";
import IndexDetailsLineChart2 from "../Components/IndexDetailsLineChart2.jsx";

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
import { setCurrentTheme } from '../store/action/index';

import { useHistory } from "react-router-dom";

import { setModalValue } from '../store/action/index'
import TextInput from './TextInput';
import SubTextInput from "./SubTextInput";

const IndexDetails = (props) => {

    const history = useHistory();
    const handleRowClick = () => {
        history.push(`/pool/details`);
    }


    //For Tabs 
    const [activeItem, setActiveItem] = useState("1");
    const [activeItemHead, setActiveItemHead] = useState("1");
    const [activeItemRight, setActiveItemRight] = useState("1");
    const [swap1dtxt, setSwap1dtxt] = useState("LINK");
    const [swap1dimg, setSwap1dimg] = useState(img7);

    const [swap2dtxt, setSwap2dtxt] = useState("UNI");
    const [swap2dimg, setSwap2dimg] = useState(img4);
    const [modal, setModal] = useState(false);


    const toggleModal = () => {
        setModal(!modal);
        // console.log("The Key jkljlkjkljkljkljklj is : ", props.SET_MODAL);
    }


    const toggle = tab => e => {
        if (activeItem !== tab) {
            setActiveItem(tab)
        }
    };

    const toggle2 = tab => e => {
        if (activeItemHead !== tab) {
            setActiveItemHead(tab)
        }
    };

    const toggle3 = tab => e => {
        if (activeItemRight !== tab) {
            setActiveItemRight(tab)
        }
    };

    const changeDropDown1Swap = (txt, img) => {
        setSwap1dimg(img);
        setSwap1dtxt(txt);
    }

    const changeDropDown2Swap = (txt, img) => {
        setSwap2dimg(img);
        setSwap2dtxt(txt);
    }

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

            {(modal) ? (
                <MDBContainer>
                    <MDBModal isOpen={modal} toggle={() => toggleModal()} centered size="lg">
                        <MDBModalHeader className="modalStyle" toggle={() => toggleModal()}><p className="modalTitle">Uniswap Minter</p></MDBModalHeader>
                        <MDBModalBody className="modalStyle">
                            <p className="modalSubTitle">Route swaps through Uniswap to mint pool tokens.</p>
                            <div className="modalInputContainer">
                                <label htmlFor="SEND"></label>
                                <input type="text" style={{ width: "60%", border: "none" }} placeholder="SEND" className="form-control input_TEXT_MODAL" />

                                <div className="dropdown">
                                    <button className="btn btn-input-right-inside-ib" style={{ backgroundColor: "var(--background-color)" }} type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
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
                            </div>
                            <div className="modalInputContainer">
                                <label htmlFor="RECIEVE"></label>
                                <input type="text" placeholder="RECEIVE" className="form-control input_TEXT_MODAL" />

                                <h5 className="text-input-modal-down">DEGEN</h5>
                             
                            </div>
                            <br />
                            <div className="text-center">
                                <button className="btn btn-lg btn-mint-modal">MINT</button>
                            </div>
                        </MDBModalBody>
                        {/* <MDBModalFooter style={{background:"var(--background-color)"}}>
                        </MDBModalFooter> */}
                    </MDBModal>
                </MDBContainer>
            ) : (
                <span></span>
            )}


            <div className="id-container">
                <div className="row">
                    <div className="col-md-8 col-lg-8 br3PX">
                        <div className="id-left-container">
                            <MDBTabContent activeItem={activeItem} >
                                <MDBTabPane tabId="1" role="tabpanel">

                                    <div className="mt-2">
                                        <h3 className="id-left-heading">
                                            {(props.SET_THEME == "dark") ? (
                                                <img width="30" src={symbol2} alt="crypto-symbol" />
                                            ) : (
                                                <img width="30" src={symbol} alt="crypto-symbol" />
                                            )}
                                             &nbsp; Cryptocurrency Top 10 Index [CC10] &emsp; $73.06 &nbsp; <span className="darkpink">(-3.72%)</span></h3>
                                    </div>

                                </MDBTabPane>
                                <MDBTabPane tabId="2" role="tabpanel">
                                    <div className="mt-2">
                                        <h3 className="id-left-heading">
                                            {(props.SET_THEME == "dark") ? (
                                                <img width="30" src={symbol2} alt="crypto-symbol" />
                                            ) : (
                                                <img width="30" src={symbol} alt="crypto-symbol" />
                                            )}
                                             &nbsp; Cryptocurrency Top 10 Index [CC10] &emsp; $28,042,358.51 &nbsp; <span className="darkpink">(-3.85%)</span></h3>
                                    </div>
                                </MDBTabPane>
                            </MDBTabContent>
                        </div>
                        <div className="map-container-left">

                            <div className="row">
                                <div className="col-md-4">
                                    <MDBNav className="nav-tabs mt-0.5">
                                        <MDBNavItem>
                                            <button className={`idLeftToggleBtn ${activeItem == "1" ? "back-grey" : ""}`} onClick={toggle("1")} role="tab" >
                                                Value
                                        </button>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <button className={`idLeftToggleBtn ${activeItem == "2" ? "back-grey" : ""}`} onClick={toggle("2")} role="tab" >
                                                TVL
                                        </button>
                                        </MDBNavItem>
                                    </MDBNav>
                                </div>
                                <div className="col-md-8">
                                    <MDBNav className="nav-tabs mt-0.5">
                                        <MDBNavItem>
                                            <button className={`idLeftToggleBtn2 ${activeItemHead == "1" ? "back-grey" : ""}`} onClick={toggle2("1")} role="tab" >
                                                D
                                        </button>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <button className={`idLeftToggleBtn2 ${activeItemHead == "2" ? "back-grey" : ""}`} onClick={toggle2("2")} role="tab" >
                                                W
                                        </button>
                                        </MDBNavItem>
                                    </MDBNav>
                                </div>
                            </div>
                            <MDBTabContent activeItem={activeItemHead}>
                                <MDBTabPane tabId="1" role="tabpanel">
                                    <div className="mt-5">
                                        <IndexDetailsLineChart1 />
                                    </div>
                                </MDBTabPane>
                                <MDBTabPane tabId="2" role="tabpanel">
                                    <div className="mt-5">
                                        <IndexDetailsLineChart2 />
                                    </div>
                                </MDBTabPane>
                            </MDBTabContent>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-3">
                                    {/* Tab navs */}
                                    <div className="nav flex-column nav-tabs text-center" id="v-tabs-tab" role="tablist" aria-orientation="vertical">
                                        <a className="nav-link active idsidebar" id="v-tabs-home-tab" data-mdb-toggle="tab" href="#v-tabs-home" role="tab" aria-controls="v-tabs-home" aria-selected="true">ASSETS</a>
                                        <a className="nav-link idsidebar" id="v-tabs-profile-tab" data-mdb-toggle="tab" href="#v-tabs-profile" role="tab" aria-controls="v-tabs-profile" aria-selected="false">TRADES</a>
                                        <a className="nav-link idsidebar" id="v-tabs-messages-tab" data-mdb-toggle="tab" href="#v-tabs-messages" role="tab" aria-controls="v-tabs-messages" aria-selected="false">SWAPS</a>
                                        <a className="nav-link idsidebar" id="v-tabs-info-tab" data-mdb-toggle="tab" href="#v-tabs-info" role="tab" aria-controls="v-tabs-info" aria-selected="false">INFO</a>
                                    </div>
                                    {/* Tab navs */}
                                </div>
                                <div id="IDLeftLowerTabsDiv" className="col-9">
                                    {/* Tab content */}
                                    <div className="tab-content" id="v-tabs-tabContent">
                                        <div className="tab-pane fade show active" id="v-tabs-home" role="tabpanel" aria-labelledby="v-tabs-home-tab">
                                            <br />
                                            {/* All the small cards you can make a separate components */}
                                            <div className="content-center">
                                                <div className="displayFlex">
                                                    <div>
                                                        <img src={img1} className="IDImageMarginTop" width={50} alt="" />
                                                    </div>
                                                    <div className="displayFlexRightContent">

                                                        <h5 className="sidetoggleinsideHeaderID">Chainlink[LINK]</h5>
                                                        <div className="progress IDProgressBarContainer">
                                                            <div className="progress-bar IDProgressBarSubContainer" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <div className="sidetoggleinsidespanID">197,960.363 LINK ≈ $6,281,922.833</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* All the small cards you can make a separate components */}
                                            <br />
                                            {/* All the small cards you can make a separate components */}
                                            <div className="content-center">
                                                <div className="displayFlex">
                                                    <div>
                                                        <img src={img2} className="IDImageMarginTop" width={50} alt="" />
                                                    </div>
                                                    <div className="displayFlexRightContent">

                                                        <h5 className="sidetoggleinsideHeaderID">Uniswap[UNI]</h5>
                                                        <div className="progress IDProgressBarContainer">
                                                            <div className="progress-bar IDProgressBarSubContainer bg-darkPink" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <div className="sidetoggleinsidespanID">277,743.474 UNI ≈ $5,659,437.672</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* All the small cards you can make a separate components */}
                                            <br />
                                            {/* All the small cards you can make a separate components */}
                                            <div className="content-center">
                                                <div className="displayFlex">
                                                    <div>
                                                        <img src={img3} className="IDImageMarginTop" width={50} alt="" />
                                                    </div>
                                                    <div className="displayFlexRightContent">

                                                        <h5 className="sidetoggleinsideHeaderID">Aave[AAVE]</h5>
                                                        <div className="progress IDProgressBarContainer">
                                                            <div className="progress-bar IDProgressBarSubContainer bg-greenShade" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <div className="sidetoggleinsidespanID">6,590.029 AAVE ≈ $2,839,250.676</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* All the small cards you can make a separate components */}
                                            <br />
                                            {/* All the small cards you can make a separate components */}
                                            <div className="content-center">
                                                <div className="displayFlex">
                                                    <div>
                                                        <img src={img4} className="IDImageMarginTop" width={50} alt="" />
                                                    </div>
                                                    <div className="displayFlexRightContent">

                                                        <h5 className="sidetoggleinsideHeaderID">Compound[COMP]</h5>
                                                        <div className="progress IDProgressBarContainer">
                                                            <div className="progress-bar IDProgressBarSubContainer bg-green" role="progressbar bg-green" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <div className="sidetoggleinsidespanID">5,149.932 COMP ≈ $2,329,611.637</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* All the small cards you can make a separate components */}
                                            <br />
                                            {/* All the small cards you can make a separate components */}
                                            <div className="content-center">
                                                <div className="displayFlex">
                                                    <div>
                                                        <img src={img5} className="IDImageMarginTop" width={50} alt="" />
                                                    </div>
                                                    <div className="displayFlexRightContent">

                                                        <h5 className="sidetoggleinsideHeaderID">Synthetix[SNX]</h5>
                                                        <div className="progress IDProgressBarContainer">
                                                            <div className="progress-bar IDProgressBarSubContainer bg-darkgrey" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <div className="sidetoggleinsidespanID">107,241.468 SNX ≈ $2,587,809.061</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* All the small cards you can make a separate components */}
                                        </div>
                                        <div className="tab-pane fade" id="v-tabs-profile" role="tabpanel" aria-labelledby="v-tabs-profile-tab">
                                            {/* table here   */}
                                            <div className="table-responsive">
                                                <table className="table IDLeftLowerTradesTable">
                                                    <thead>
                                                        <tr className="trrow">
                                                            <th scope="col">TIME</th>
                                                            <th scope="col">INPUT</th>
                                                            <th scope="col">TYPE</th>
                                                            <th scope="col">OUTPUT</th>
                                                            <th scope="col">TRANSACTION</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* This is just dummy data to showcase.I know the backend developer will just put a map loop on one row with the data */}
                                                        <tr className="trrow spacemore">
                                                            <th scope="row">11 MINS AGO</th>
                                                            <td>10.63 CC10</td>
                                                            <td className="darkpink">SELL</td>
                                                            <td>0.43 ETH</td>
                                                            <td className="table-id-row-link"><a className="link-style" href="https://etherscan.io/tx/0xba3916a9562431639efb94d7c62537f42760f69148277f32cdc486afd9a7b9f8">0 XBA...B9F8</a></td>
                                                        </tr>
                                                        <tr className="trrow spacemore">
                                                            <th scope="row">29 MINS AGO</th>
                                                            <td>10 ETH</td>
                                                            <td className="green">BUY</td>
                                                            <td>247.79 CC10</td>
                                                            <td className="table-id-row-link"><a className="link-style" href="https://etherscan.io/tx/0xba3916a9562431639efb94d7c62537f42760f69148277f32cdc486afd9a7b9f8">0 XBA...B9F8</a></td>
                                                        </tr>
                                                        <tr className="trrow spacemore">
                                                            <th scope="row">1 HR AGO</th>
                                                            <td>48.5 ETH</td>
                                                            <td className="green">BUY</td>
                                                            <td>1,216.03 CC10</td>
                                                            <td className="table-id-row-link"><a className="link-style" href="https://etherscan.io/tx/0xba3916a9562431639efb94d7c62537f42760f69148277f32cdc486afd9a7b9f8">0 XBA...B9F8</a></td>
                                                        </tr>
                                                        <tr className="trrow spacemore">
                                                            <th scope="row">11 MINS AGO</th>
                                                            <td>10.63 CC10</td>
                                                            <td className="darkpink">SELL</td>
                                                            <td>0.43 ETH</td>
                                                            <td className="table-id-row-link"><a className="link-style" href="https://etherscan.io/tx/0xba3916a9562431639efb94d7c62537f42760f69148277f32cdc486afd9a7b9f8">0 XBA...B9F8</a></td>
                                                        </tr>
                                                        {/* This is just dummy data to showcase.I know the backend developer will just put a map loop on one row with the data*/}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* table here */}
                                        </div>
                                        <div className="tab-pane fade" id="v-tabs-messages" role="tabpanel" aria-labelledby="v-tabs-messages-tab">
                                            {/* table here   */}
                                            <div className="table-responsive">
                                                <table className="table IDLeftLowerTradesTable">
                                                    <thead>
                                                        <tr className="trrow">
                                                            <th scope="col">TIME</th>
                                                            <th scope="col">INPUT</th>
                                                            <th scope="col">OUTPUT</th>
                                                            <th scope="col">TRANSACTION</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {/* This is just dummy data to showcase.I know the backend developer will just put a map loop on one row with the data */}
                                                        <tr className="trrow">
                                                            <th scope="row">1 HR AGO</th>
                                                            <td>61.35 AAVE</td>
                                                            <td className="darkpink">1,297.9 UNI</td>
                                                            <td className="table-id-row-link"><a className="link-style" href="https://etherscan.io/tx/0xba3916a9562431639efb94d7c62537f42760f69148277f32cdc486afd9a7b9f8">0 XBA...B9F8</a></td>
                                                        </tr>
                                                        <tr className="trrow">
                                                            <th scope="row">3 HRS AGO</th>
                                                            <td>4.49 MKR</td>
                                                            <td className="darkpink">1,784.11 OMG</td>
                                                            <td className="table-id-row-link"><a className="link-style" href="https://etherscan.io/tx/0xba3916a9562431639efb94d7c62537f42760f69148277f32cdc486afd9a7b9f8">0 XBA...B9F8</a></td>
                                                        </tr>
                                                        <tr className="trrow">
                                                            <th scope="row">4 HRS AGO</th>
                                                            <td>882.92 SNX</td>
                                                            <td className="darkpink">46.53 AAVE</td>
                                                            <td className="table-id-row-link"><a className="link-style" href="https://etherscan.io/tx/0xba3916a9562431639efb94d7c62537f42760f69148277f32cdc486afd9a7b9f8">0 XBA...B9F8</a></td>
                                                        </tr>
                                                        <tr className="trrow">
                                                            <th scope="row">6 HRS AGO</th>
                                                            <td>1,104.31 UNI</td>
                                                            <td className="darkpink">50.35 AAVE</td>
                                                            <td className="table-id-row-link"><a className="link-style" href="https://etherscan.io/tx/0xba3916a9562431639efb94d7c62537f42760f69148277f32cdc486afd9a7b9f8">0 XBA...B9F8</a></td>
                                                        </tr>
                                                        {/* This is just dummy data to showcase.I know the backend developer will just put a map loop on one row with the data*/}
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* table here */}
                                        </div>
                                        <div className="tab-pane fade" id="v-tabs-info" role="tabpanel" aria-labelledby="v-tabs-info-tab">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <div className="container-half">
                                                            <div>
                                                                <button onClick={() => handleRowClick()} className="btn btn-lg btn-view-pool">
                                                                    VIEW POOL
                                                          </button>
                                                            </div>
                                                            <div>
                                                                <button className="btn btn-lg btn-view-pool">
                                                                    CATEGORY
                                                          </button>
                                                            </div>
                                                        </div>
                                                        <br />
                                                        <div className="displayFlex">
                                                            <img className="" width={40} src={img9} alt="" />

                                                            <img src={img7} width={40} className="rightImageID" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">

                                                        <div className="lastTabsHeadings">

                                                            <h3 className="hfs">
                                                                CUMULATIVE FEES: $552,803.98
                                                            </h3>
                                                            <h3 className="hfs">VOLUME: $2,168,208.59</h3>
                                                            <h3 className="hfs">SWAP FEE: 2.5%</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Tab content */}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-4">
                        <br />
                        <div className="idRightToggleContainer">
                            <div>
                                <MDBNav className="nav-tabs mt-0.5">
                                    <MDBNavItem>
                                        <button className={`idRightToggleBtn ${activeItemRight == "1" ? "back-grey" : ""}`} onClick={toggle3("1")} role="tab" >
                                            BUY CC10
                                        </button>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <button className={`idRightToggleBtn ${activeItemRight == "2" ? "back-grey" : ""}`} onClick={toggle3("2")} role="tab" >
                                            MINT
                                        </button>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <button className={`idRightToggleBtn ${activeItemRight == "3" ? "back-grey" : ""}`} onClick={toggle3("3")} role="tab" >
                                            BURN
                                        </button>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <button className={`idRightToggleBtn ${activeItemRight == "4" ? "back-grey" : ""}`} onClick={toggle3("4")} role="tab" >
                                            SWAP
                                        </button>
                                    </MDBNavItem>
                                </MDBNav>
                            </div>
                        </div>
                        <MDBTabContent activeItem={activeItemRight} >
                            <MDBTabPane tabId="1" role="tabpanel">
                                <div className="mt-5">
                                    <div className="center-element">
                                        <TextInput label="SEND" placeholder="0" rightText="ETH" />
                                        <h5>BALANCE: 0.00</h5>
                                        <br />
                                        <p>1 CC10 = 0.04011 ETH</p>
                                        <button className="btn-transparent"><i className="fas fa-exchange-alt"></i></button>
                                        <br />
                                        <p>1 ETH = 24.92651 CC10</p>
                                        <TextInput label="RECEIVE" placeholder="0.00" rightText="CC10" />
                                        <h5>BALANCE: 0.00</h5>
                                        <br />

                                    </div>
                                    <div className="fee">
                                        <div className="row">
                                            <div className="col-md-6">
                                                FEE
                                                </div>
                                            <div className="col-md-6">
                                                <div className="grey sm-size">NaN.00 DEFI5</div>
                                            </div>
                                        </div>
                                    </div>
                                    <br /><br />
                                    <div className="content-center-id">
                                        {(props.SET_KEY) ? (
                                            <div>
                                                <button id="b1pixels" disabled={true} className="btn btn-connect">SWAP</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <button className="btn btn-connect">CONNECT</button>
                                            </div>
                                        )}




                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="2" role="tabpanel">
                                <div className="mt-5">
                                    <div className="center-element">
                                        <TextInput label="RECEIVE" placeholder="0" rightText="DEGEN" />
                                        <br />
                                        <div className="displayFlex">
                                            <p className="sloppage">SLIPPAGE:</p>
                                            &ensp;
                                            <button className="sloppage-btn">1 %</button>
                                            &ensp;
                                            <button className="sloppage-btn">2 %</button>
                                        </div>
                                    </div>
                                    <div className="right-table-id">
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img1} alt="a image" /> <span className="uni">&nbsp;LINK</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img2} alt="a image" /> <span className="uni">&nbsp;UNI</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img3} alt="a image" /> <span className="uni">&nbsp;AAVE</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img4} alt="a image" /> <span className="uni">COMP</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img5} alt="a image" /> <span className="uni">&nbsp; SNX</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img6} alt="a image" /> <span className="uni">&nbsp; CRV</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img7} alt="a image" /> <span className="uni">&nbsp; YFI</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img8} alt="a image" /> <span className="uni">&nbsp; UMA</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img9} alt="a image" /> <span className="uni">&nbsp; MKA</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="mint-id-table-row">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="form-check">
                                                                <br />
                                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                            </div>
                                                            <div>
                                                                <br />
                                                                <img width={30} src={img10} alt="a image" /> <span className="uni">&nbsp; OMG</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-8">
                                                        <div className="form-check">
                                                            <br />
                                                            <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div className="content-center-id">

                                        {(props.SET_KEY) ? (
                                            <div>
                                                <div className="d-flex">
                                                    <button className="btn btn-mint1" onClick={() => toggleModal(true)}>MINT WITH UNISWAP</button>
                                                    <button disabled={true} id="b1pixels" className="btn btn-mint2">MINT</button>
                                                </div>

                                            </div>
                                        ) : (
                                            <div>
                                                <button className="btn btn-connect">CONNECT</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="3" role="tabpanel">
                                <div className="mt-5">
                                    <div className="mt-5">
                                        <div className="center-element">
                                            <TextInput label="DESTROY" placeholder="0" rightText="DEGEN" />
                                            <br />
                                        </div>
                                        <div className="right-table-id">
                                            <div className="mint-id-table-row">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check">
                                                                    <br />
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />
                                                                </div>
                                                                <div>
                                                                    <br />
                                                                    <img width={30} src={img1} alt="a image" /> <span className="uni">&nbsp; LINK</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="form-check">
                                                                <br />
                                                                <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mint-id-table-row">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check">
                                                                    <br />
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                                </div>
                                                                <div>
                                                                    <br />
                                                                    <img width={30} src={img2} alt="a image" /> <span className="uni">&nbsp; UNI</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="form-check">
                                                                <br />
                                                                <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mint-id-table-row">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check">
                                                                    <br />
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                                </div>
                                                                <div>
                                                                    <br />
                                                                    <img width={30} src={img3} alt="a image" /><span className="uni">&nbsp; AAVE</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="form-check">
                                                                <br />
                                                                <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mint-id-table-row">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check">
                                                                    <br />
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                                </div>
                                                                <div>
                                                                    <br />
                                                                    <img width={30} src={img4} alt="a image" /><span className="uni">&nbsp;COMP</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="form-check">
                                                                <br />
                                                                <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mint-id-table-row">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check">
                                                                    <br />
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                                </div>
                                                                <div>
                                                                    <br />
                                                                    <img width={30} src={img5} alt="a image" /> <span className="uni">&nbsp; SNX</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="form-check">
                                                                <br />
                                                                <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mint-id-table-row">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="d-flex justify-content-center">
                                                                <div className="form-check">
                                                                    <br />
                                                                    <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" defaultChecked="true" />

                                                                </div>
                                                                <div>
                                                                    <br />
                                                                    <img width={30} src={img6} alt="a image" /> <span className="uni">&nbsp;CRV</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-8">
                                                            <div className="form-check">
                                                                <br />
                                                                <div>
                                                                    <TextInput label="AMOUNT" placeholder="0" rightText="APPROVE" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                        <div className="content-center-id">
                                            {(props.SET_KEY) ? (
                                                <div>
                                                    <button disabled={true} id="b1pixels" className="btn btn-connect">BURN</button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <button className="btn btn-connect">CONNECT</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </MDBTabPane>
                            <MDBTabPane tabId="4" role="tabpanel">
                                <div className="mt-5">
                                    <div className="center-element">

                                        <label htmlFor="">SEND</label>
                                        <div className="inputContainerID">

                                            <input type="text" placeholder="0.00" className="form-control inputID" />

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
                                        </div>
                                        <h5>BALANCE: 0.00</h5>

                                        <br />
                                        <p>1 CC10 = 0.04011 ETH</p>
                                        <button className="btn-transparent"><i className="fas fa-exchange-alt"></i></button>
                                        <br />
                                        <p>1 ETH = 24.92651 CC10</p>

                                        <div className="inputContainerID">
                                            <label htmlFor="RECEIVE"></label>
                                            <input type="text" id="inputID" placeholder="0.00" className="form-control" />

                                            {/* sdadddddddddddddddddddddddddddddddddddddddddddddddd */}
                                            <div className="dropdown">
                                                <button className="btn btn-input-right-inside-ib" type="button" id="dropdownMenu2" data-mdb-toggle="dropdown" aria-expanded="false">
                                                    <div className="d-flex">
                                                        <img className="img-ib-inside" src={swap2dimg} width={30} alt="" />
                                                        <p className="text-ib-inside">{swap2dtxt}</p>
                                                        <div>
                                                            <i className="fa fa-caret-down" aria-hidden="true"></i>
                                                        </div>
                                                    </div>
                                                </button>

                                                <ul className="dropdown-menu dropdown-list-in-input-style" aria-labelledby="dropdownMenu2">
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="LINK" onClick={() => changeDropDown2Swap("LINK", img7)} src={img7} showArrow={false} />
                                                    </li>
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="UNI" onClick={() => changeDropDown2Swap("UNI", img6)} src={img6} />
                                                    </li>
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="AVE" onClick={() => changeDropDown2Swap("AVE", img5)} src={img5} />
                                                    </li>
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="COMP" onClick={() => changeDropDown2Swap("COMP", img4)} src={img4} />
                                                    </li>
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="SNX" onClick={() => changeDropDown2Swap("SNX", img3)} src={img3} />
                                                    </li>
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="CRV" onClick={() => changeDropDown2Swap("CRV", img2)} src={img2} />
                                                    </li>
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="YFI" onClick={() => changeDropDown2Swap("YFI", img1)} src={img1} />
                                                    </li>
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="UMA" onClick={() => changeDropDown2Swap("UMA", img8)} src={img8} />
                                                    </li>
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="MKR" onClick={() => changeDropDown2Swap("MKR", img9)} src={img9} />
                                                    </li>
                                                    <li>
                                                        <InputButton className="dropdown-item" width={30} text="OMG" onClick={() => changeDropDown2Swap("OMG", img10)} src={img10} />
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* dsafdddddddddddddddddddddddddddddddddddddddddddddddddddd */}
                                        </div>
                                        <h5>BALANCE: 0.00</h5>
                                        <br />
                                        <div className="fee">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    FEE
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="grey sm-size">NaN.00 DEFI5</div>
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                        <br />

                                        {(props.SET_KEY) ? (
                                            <div className="content-center-id">
                                                <button className="btn btn-connect">SWAP</button>
                                            </div>
                                        ) : (
                                            <div className="content-center-id">
                                                <button className="btn btn-connect">CONNECT</button>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </MDBTabPane>
                        </MDBTabContent>
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
    SET_MODAL: state.app.SET_MODAL,
    SET_THEME: state.app.SET_THEME
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setModalValue: (data) => dispatch(setModalValue(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(IndexDetails);
