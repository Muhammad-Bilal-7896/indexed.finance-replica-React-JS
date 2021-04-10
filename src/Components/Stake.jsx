import React, { useEffect } from 'react';

// All the components import is here
import Header from './Header';
import Footer from './Footer';
import StakeSubDiv from './StakeSubDiv';
// All the components import is here

// All the external libraires imoprt is here
// All the external libraires imoprt is here

import '../Styling/Stake.css';

const Stake = () => {

    useEffect(() => {

    })

    return (
        <div>
            <div className="container">
                <div className="fixed-top">
                    <Header />
                </div>
            </div>
            
            <br /><br /><br /><br /><br />
            <br />

            <div className="container stake-container">
                <div className="row">
                    <div className="col-md-12">
                        <form>
                            <fieldset>
                                <legend>LIQUIDITY MINING</legend>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="liquidity-mining">
                                                Stake index tokens or their associated Uniswap liquidity tokens to earn NDX, the governance token for Indexed Finance.
                                                <br />
                                                <a href="https://ndxfi.medium.com/how-to-mint-and-stake-index-pool-tokens-5c21a08706ce" className="read-more-l-m">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>

                <StakeSubDiv/>
                <StakeSubDiv/>
                <StakeSubDiv/>
                <StakeSubDiv/>

            </div>

            <br /><br />
            {/* The Footer Component */}
            <Footer />
            {/* The Footer Component */}
        </div>
    )
}
export default Stake;