import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import AppRouter from './config/router'

import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";

import "../src/App.css";

const Loader = () => {
  return (
    <div className = "loading-wrapper" >
      <br/>
      <br/>
      <h1 className="text-center">Indexed Finance</h1>
      <div className="loading">
        <span />
        <span />
        <span />
        <span />
        <span />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h5 className="text-center">ALL RIGHTS RESERVED. INDEXED 2021</h5>
      </div>
   </div>
  );
}

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const finishLoading = () => {
    setIsLoaded(true);
  }



  useEffect(() => {
    setTimeout(finishLoading, 1000);
  })

  return (
    <div>
      {(isLoaded == true) ? (
        <div>
          <AppRouter />
        </div>
      ) : (
          <div>
            <Loader />
          </div>
        )}
    </div>
  );
}

export default App;
