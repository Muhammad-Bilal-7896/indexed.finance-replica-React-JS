import React from 'react'

import '../Styling/Propsals.css';

import { Link,useHistory } from "react-router-dom";

function ProposalTableRows() {

    const history = useHistory();
    const handleRowClick = () => {
        history.push('/governance/details');
    }

    return (
        <tbody>
            <tr onClick={()=> handleRowClick()} className="trrow">
                <th scope="row">
                        Enable Meta-Governance for UNI & COMP
                    <br />
                    <button className="btn btn-sm btn-success">ACTIVE</button> <span className="sub-active-text">0 x 5 . 11874757</span>
                </th>
                <td>
                    <div>
                        <div className="row">
                            <div className="col">
                                <div className="progress propsal-progress-container">
                                    <div className="progress-bar propsal-progress-SubcontainerUpper" role="progressbar" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-progress-text-up">174,999.936</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="progress propsal-progress-container">
                                    <div className="progress-bar propsal-progress-SubcontainerLower" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                </div>
                            </div>
                            <div className="col">
                                <div className="sub-progress-text-down">0 NDX</div>
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    <button className="btn btn-outline-dark btn-propsal-vote">VOTE</button>
                </td>
            </tr>
        </tbody>
    )
}
export default ProposalTableRows;