import React, { useEffect, useState } from "react";

import Sidebar from "react-sidebar";
import Logo from '../UI/logo.jpeg';
import LogoDark from "../UI/white-logo.png";

import DarkMode from "./DarkMode";

import "../Styling/Docs.css"

import { connect } from "react-redux";
import { setCurrentTheme } from '../store/action/index';

const mql = window.matchMedia(`(min-width: 800px)`);

const Docs = (props) => {

    const [isOpen, setIsOpen] = useState(true);

    const [sidebarDocked, setSidebarDocked] = useState(mql.matches);

    const toggleCollapse = (val) => {
        setIsOpen(val);
    }

    const mediaQueryChanged = () => {
        setSidebarDocked(mql.matches);
    }

    mql.addListener(mediaQueryChanged);

    return (
        <div>
            <nav className="navbar" id="docsNavBarTop">
                <div className="container-fluid">

                    <a className="navbar-brand">

                        <div className="d-flex" onClick={() => setIsOpen(!isOpen)}>
                            {(props.SET_THEME == "dark") ? (
                                <img width="50" src={LogoDark} alt="Indexed.Finance" />
                            ) : (
                                <img width="50" src={Logo} alt="Indexed.Finance" />
                            )}

                            <h2 id="logo-text-docs">Indexed Finance</h2>
                        </div>
                    </a>
                    <form className="d-flex input-group w-auto">
                        <div id="btn-search">
                            <input type="search" className="form-control" placeholder="Search ..." aria-label="Search" />
                            <button className="btn btn-outline-primary btnasalinside" type="button" data-mdb-ripple-color="dark">
                                Search
                            </button>
                            <div className="d-none">
                                <DarkMode />
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
            <Sidebar
                sidebar={
                    <div>
                        {/* Tab navs */}
                        <div className="nav flex-column nav-tabs text-center tab-docs-left" id="v-tabs-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-tabs-the1-tab" data-mdb-toggle="tab" href="#v-tabs-the1" role="tab" aria-controls="v-tabs-the1" aria-selected="true">Home</a>
                            <a className="nav-link docs-tabs" id="v-tabs-the2-tab" data-mdb-toggle="tab" href="#v-tabs-the2" role="tab" aria-controls="v-tabs-the2" aria-selected="false">Profile</a>
                            <a className="nav-link docs-tabs" id="v-tabs-the3-tab" data-mdb-toggle="tab" href="#v-tabs-the3" role="tab" aria-controls="v-tabs-the3" aria-selected="false">Messages</a>
                            <a className="nav-link docs-tabs" id="v-tabs-about-tab" data-mdb-toggle="tab" href="#v-tabs-about" role="tab" aria-controls="v-tabs-about" aria-selected="false">About</a>
                            <a className="nav-link docs-tabs" id="v-tabs-country-tab" data-mdb-toggle="tab" href="#v-tabs-country" role="tab" aria-controls="v-tabs-country" aria-selected="false">Country</a>
                            <a className="nav-link docs-tabs" id="v-tabs-region-tab" data-mdb-toggle="tab" href="#v-tabs-region" role="tab" aria-controls="v-tabs-region" aria-selected="false">Region</a>
                            <a className="nav-link docs-tabs" id="v-tabs-continent-tab" data-mdb-toggle="tab" href="#v-tabs-continent" role="tab" aria-controls="v-tabs-continent" aria-selected="false">Continent</a>
                            <a className="nav-link docs-tabs" id="v-tabs-province-tab" data-mdb-toggle="tab" href="#v-tabs-province" role="tab" aria-controls="v-tabs-province" aria-selected="false">Province</a>
                            <a className="nav-link docs-tabs" id="v-tabs-bioData-tab" data-mdb-toggle="tab" href="#v-tabs-bioData" role="tab" aria-controls="v-tabs-bioData" aria-selected="false">Bio-Data</a>
                            <a className="nav-link docs-tabs" id="v-tabs-company-tab" data-mdb-toggle="tab" href="#v-tabs-company" role="tab" aria-controls="v-tabs-company" aria-selected="false">Company</a>
                        </div>
                        {/* Tab navs */}
                    </div>
                }
                open={isOpen}
                docked={sidebarDocked}
                onSetOpen={toggleCollapse}
                styles={{ sidebar: { background: "white", marginTop: "100px" } }}
            >
                <div style={{ width: "100%", height: "100%", marginTop: "100px" }}>

                    <div id="Docs-bars" onClick={() => setIsOpen(!isOpen)}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    {/* Tab content */}
                    <div className="tab-content" id="v-tabs-tabContent">
                        <div className="tab-pane fade show active" id="v-tabs-the1" role="tabpanel" aria-labelledby="v-tabs-the1-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>Home</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-tabs-the2" role="tabpanel" aria-labelledby="v-tabs-the2-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>Profle</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-tabs-the3" role="tabpanel" aria-labelledby="v-tabs-the3-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>Messages</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-tabs-about" role="tabpanel" aria-labelledby="v-tabs-about-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>About</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-tabs-country" role="tabpanel" aria-labelledby="v-tabs-country-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>Country</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-tabs-region" role="tabpanel" aria-labelledby="v-tabs-region-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>Region</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-tabs-continent" role="tabpanel" aria-labelledby="v-tabs-continent-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>Continent</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-tabs-province" role="tabpanel" aria-labelledby="v-tabs-province-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>Province</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-tabs-bioData" role="tabpanel" aria-labelledby="v-tabs-bioData-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>Bio Data</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-tabs-company" role="tabpanel" aria-labelledby="v-tabs-company-tab">
                            <div className="container">
                                <div className="row">
                                    <h1>Company</h1>
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                    <hr />
                                    <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, ratione. Quibusdam dignissimos quam asperiores! Odio aliquid blanditiis veritatis exercitationem placeat, distinctio dolore aspernatur sequi similique ad libero temporibus. Explicabo, beatae?</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </div>
    )
}
const mapStateToProps = (state) => ({
    SET_THEME: state.app.SET_THEME
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setCurrentTheme: (data) => dispatch(setCurrentTheme(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Docs);