import React from 'react'

import '../Styling/Propsals.css';

import ProposalTableRows from './PropsalTableRows';

function Proposals() {
    return (
        <form>
            <fieldset>
                <legend>PROPOSALS</legend>
                {/* table here   */}
                <div style={{ maxHeight: "110px" }} className="table-responsive">
                    <table className="table">
                        <ProposalTableRows />
                        <ProposalTableRows />
                        <ProposalTableRows />
                        <ProposalTableRows />
                    </table>
                </div>
                {/* table here */}
            </fieldset>
        </form>
    )
}
export default Proposals;