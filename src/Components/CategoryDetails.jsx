import React, { useEffect, useState } from 'react';

// All the components import is here
import Header from './Header';
import Footer from './Footer';
// All the components import is here

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import '../Styling/CategoryDetails.css';

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

const CategoryDetails = () => {

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

            <div className="container">
                <div className="row">
                    <div className="category-detail-div">
                        <fieldset>
                            <legend>CATEGORY</legend>
                            <div>
                                {/* Tabs navs */}
                                <ul className="nav nav-tabs mb-3" id="ex1" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link idsidebar active" id="ex1-tab-1" data-mdb-toggle="tab" href="#ex1-tabs-1" role="tab" aria-controls="ex1-tabs-1" aria-selected="true">DESCRIPTION</a>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <a className="nav-link idsidebar" id="ex1-tab-2" data-mdb-toggle="tab" href="#ex1-tabs-2" role="tab" aria-controls="ex1-tabs-2" aria-selected="false">TOKENS</a>
                                    </li>
                                </ul>
                                {/* Tabs navs */}
                                {/* Tabs content */}
                                <div className="tab-content" id="ex1-content">
                                    <div className="tab-pane fade show active" id="ex1-tabs-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                                        <div className="container">
                                            <div className="row">
                                                <h1 className="text-bold text-space cd-head-left-title">Large Cap Cryptocurrency Tokens</h1>
                                                <h5 className="cd-para-left-tab">This category tracks Ethereum-based protocol tokens, DeFi governance tokens and wrapped blockchain currencies with a high market cap.</h5>
                                                <h5 className="cd-para-left-tab">Name: Cryptocurrency</h5>
                                                <h5 className="cd-para-left-tab">Symbol: CC</h5>
                                                <h2 className="text-bold text-space cd-head-left-sub-title">Criteria</h2>
                                                <h5 className="cd-para-left-tab">This category has the following criteria for inclusion:</h5>
                                                <div className="container">
                                                    <div className="row">
                                                        <ol className="list-cd-style">
                                                            <li>The token is at least a week old.</li>
                                                            <li>No major vulnerabilities have been discovered in the token contract.</li>
                                                            <li>The token's supply can not be arbitrarily inflated or deflated maliciously.
                                                                <ul>
                                                                    <li>The control model should be considered if the supply can be modified through governance decisions.</li>
                                                                </ul>
                                                            </li>
                                                            <li>The token does not have transfer fees or other non-standard balance updates.</li>
                                                            <li>The token meets the requirements of the ERC20 standard.
                                                                <ul>
                                                                    <li>Boolean return values are not required.</li>
                                                                </ul>
                                                            </li>
                                                            <li>The token has a fully diluted market cap of at least $50 million.</li>
                                                            <li>At least $1 million worth of liquidity is locked in the Uniswap market pair between the token and WETH.
                                                                <ul>
                                                                    <li>This does not apply to WETH.</li>
                                                                </ul>
                                                            </li>
                                                            <li>
                                                                The token is one of:
                                                                <ul>
                                                                    <li>Protocol token for an Ethereum-based project.</li>
                                                                    <li>Governance token for a DeFi project.</li>
                                                                    <li>Wrapper token for a blockchain's native currency.</li>
                                                                </ul>
                                                            </li>
                                                        </ol>
                                                    </div>
                                                </div>
                                                <h2 className="text-bold text-space cd-head-left-sub-title">Terms</h2>
                                                <br /> <br />
                                                <h5 className="cd-para-left-tab"><span className="bolder-cd">Fully Diluted Market Cap:</span> Market price of one token in USD multiplied by the token's total supply.</h5>
                                                <h5 className="cd-para-left-tab"><span className="bolder-cd">Governance Token:</span> A token used to vote on governance decisions for a project.</h5>
                                                <h5 className="cd-para-left-tab"><span className="bolder-cd">DeFi:</span> Decentralized Finance - used in reference to Ethereum-based financial projects. By "financial projects" we mean projects which directly deal with finance such as exchange, lending, portfolio management, derivatives, etc. and not projects which are only peripherally related to finance.</h5>
                                                <h2 className="text-bold text-space cd-head-left-sub-title">Index Naming Scheme</h2>
                                                <h5 className="cd-para-left-tab">Indices deployed for this category should use the following naming scheme for the ERC20 name and symbol:</h5>
                                                <h5 className="cd-para-left-tab"><span className="bolder-cd">Symbol: </span> <span className="bg-grey-hightlight">CC</span> + Index Size</h5>
                                                <h5 className="cd-para-left-tab"><span className="bolder-cd">Name: </span> <span className="bg-grey-hightlight">Cryptocurrency Top</span> + Index Size + Tokens Index</h5>
                                                <span className="bolder-cd">Example: </span>
                                                <h5 className="cd-para-left-tab">Index Size: 5</h5>
                                                <h5 className="cd-para-left-tab">Symbol: <span className="bg-grey-hightlight">CC5</span></h5>
                                                <h5 className="cd-para-left-tab">Name: <span className="bg-grey-hightlight">Cryptocurrency Top 5 Tokens Index</span></h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                                        <div>
                                            <table className="right-table-cd">
                                                <tbody>
                                                    <tr className="right-table-cd-row">
                                                        <th className="font-table"><h4 className="name-table-head-cd">NAME</h4></th>
                                                        <th className="right-table-cd-col"><h4 className="price-table-head-cd">PRICE</h4></th>
                                                    </tr>
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img1} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">UMA [UMA]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$26.63</h4>
                                                        </td>
                                                    </tr>
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img2} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">Yearn [YFI]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$44,574.15</h4>
                                                        </td>
                                                    </tr>
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img3} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">Basic Attention Token [BAT]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$0.24</h4>
                                                        </td>
                                                    </tr>
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img4} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">Uniswap [UNI]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$20.59</h4>
                                                        </td>
                                                    </tr>
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img5} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">Republic [REN]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$0.34</h4>
                                                        </td>
                                                    </tr>
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img6} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">Chainlink [LINK]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$34.13</h4>
                                                        </td>
                                                    </tr>
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img7} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">Aave [AAVE]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$438.81</h4>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img8} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">MakerDAO [MKR]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$2,595.9</h4>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img9} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">Compound [COMP]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$475.29</h4>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr className="right-table-cd-row-2">
                                                        <td>
                                                            <div className="d-flex right-table-cd-inside-div">
                                                                <img src={img10} width={50} height={50} alt="" />
                                                                <h4 className="uma-cd">Synthetix [SNX]</h4>
                                                            </div>
                                                        </td>
                                                        <td className="right-table-cd-col">
                                                            <h4 className="price-table-cd-col">$22.67</h4>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* Tabs content */}
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
export default CategoryDetails;
