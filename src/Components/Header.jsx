import React, { useEffect, useState } from 'react';
import '../Styling/Header.css';
import Logo from '../UI/logo.JPEG XR';
import LogoDark from "../UI/white-logo.png";

import DarkMode from "./DarkMode";

import { connect } from "react-redux";
import { setCurrentKey } from '../store/action/index';

import img7 from '../UI/CC 7.JPEG XR'

import { Link, useHistory } from "react-router-dom"

const Header = (props) => {

  const history = useHistory();
  const handleRowClick = () => {
    history.push(`/docs`);
  }

  useEffect(() => {
    // The debounce function receives our function as a parameter
    const debounce = (fn) => {
      // This holds the requestAnimationFrame reference, so we can cancel it if we wish
      let frame;
      // The debounce function returns a new function that can receive a variable number of arguments
      return (...params) => {
        // If the frame variable has been defined, clear it now, and queue for next frame
        if (frame) {
          cancelAnimationFrame(frame);
        }
        // Queue our function call for the next frame
        frame = requestAnimationFrame(() => {
          // Call our function and pass any params we received
          fn(...params);
        });
      }
    };

    // Reads out the scroll position and stores it in the data attribute
    // so we can use it in our stylesheets
    const storeScroll = () => {
      document.documentElement.dataset.scroll = window.scrollY;
    }

    // Listen for new scroll events, here we debounce our `storeScroll` function
    document.addEventListener('scroll', debounce(storeScroll), { passive: true });

    // Update scroll position for first time
    storeScroll();
  })

  const changeKey = (e) => {
    props.setCurrentKey(e);
    console.log("The Key is : ", props.SET_KEY);
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Navbar brand */}
          <Link to="/" className="navbar-brand">
            <div style={{ display: "flex" }}>
              {(props.SET_THEME=="dark")?(
                <img className="logo" src={LogoDark} alt="CryptoCurrency Site Logo" />
              ):(
                <img className="logo" src={Logo} alt="CryptoCurrency Site Logo" />
              )}
              
              <h2 id="logo-text">INDEXED</h2>
            </div>
          </Link>
          {/* Toggle button */}
          <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i id="header-bars" className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/governance" className="nav-link active t-none">GOVERNANCE</Link>
              </li>
              <li className="nav-item">
                <Link to="/categories" className="nav-link t-none">CATEGORIES</Link>
              </li>
              <li className="nav-item">
                <Link to="/stake" className="nav-link t-none">STAKE</Link>
              </li>


              {(props.SET_KEY) ? (
                <li className="nav-item">
                  <Link to="/portfolio" className="nav-link t-none">PORTFOLIO</Link>
                </li>
              ) : (
                  <span></span>
                )}

              <li className="nav-item">
                <span onClick={() => handleRowClick()} className="nav-link t-none">DOCS</span>
              </li>
              <li className="nav-item">
                <DarkMode />
              </li>
              <li className="nav-item">
                {(props.SET_KEY) ? (
                  <span className="nav-link t-none">
                    <img onClick={() => changeKey(false)} className="img-connect-meta" src={img7} width={40} alt="" />
                  </span>
                ) : (
                    <span onClick={() => changeKey(true)} className="nav-link t-none">
                      <i className="fas fa-stop iconConect" />
                    </span>
                  )}

              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </div >
  )
}
const mapStateToProps = (state) => ({
  SET_KEY: state.app.SET_KEY,
  SET_THEME: state.app.SET_THEME
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
  setCurrentKey: (data) => dispatch(setCurrentKey(data)),
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Header);