import React from 'react';

import '../Styling/Footer.css'

const Footer = () => {
    return (
        <div id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h5 id="copyright">ALL RIGHTS RESERVED. INDEXED 2021</h5>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <ul id="footerIcons">
                            <li>
                                {/* Facebook */}
                                <a type="button" className="btn btn-primary btn-floating">
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                {/* Apple */}
                                <a type="button" className="btn btn-dark btn-floating">
                                    <i className="fab fa-apple" />
                                </a>
                            </li>
                            <li>
                                <a type="button" className="btn btn-outline-success btn-floating" data-mdb-ripple-color="dark">
                                    <i className="fas fa-star" />
                                </a>
                            </li>
                            <li>
                                <a type="button" className="btn btn-danger btn-floating">
                                    <i className="fas fa-magic" />
                                </a>
                           </li>
                            <li>
                                <a type="button" className="btn btn-outline-dark btn-floating">
                                    <i className="fab fa-github" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;