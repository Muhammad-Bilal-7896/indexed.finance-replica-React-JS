import React, { useEffect, useState } from 'react';

// All the external libraires imoprt is here
// All the external libraires imoprt is here


import '../Styling/InputButton.css';

const InputButton = (props) => {

    useEffect(() => {

    })

    return (
        <div className="input-btn-container">
            <button className="btn btn-input-right-inside-ib" onClick={props.onClick}>
                <div className="d-flex">
                    <img className="img-ib-inside" src={props.src} width={props.width} alt="" />
                    <p className="text-ib-inside">{props.text}</p>
                    {/* {(props.showArrow==true) ? (
                        <div>
                            <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </div>
                    ) : (
                        <div aria-hidden="true"></div>
                     )} */}

                </div>
            </button>
        </div>
    )
}
export default InputButton;
