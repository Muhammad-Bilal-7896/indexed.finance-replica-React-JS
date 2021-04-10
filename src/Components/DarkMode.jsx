import React,{useState} from "react";

import { connect } from "react-redux";
import { setCurrentKey, setCurrentTheme } from '../store/action/index';

import '../Styling/DarkMode.css';

const DarkMode = (props) => {
    // const [currentTheme,setCurrentTheme] = useState("light");

    let clickedClass = "clicked"
    const body = document.body
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme;

    theme = props.SET_THEME;
 
    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }
    const switchTheme = e => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(clickedClass)
            props.setCurrentTheme("light");
            theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.add(clickedClass)
            props.setCurrentTheme("dark");
            theme = darkTheme
        }
        console.log("Hey idhar waikh theme kera ais waqt: ",props.SET_THEME);
    }

    return (
        <button
            className={theme === "dark" ? clickedClass : ""}
            id="darkMode"
            onClick={e => switchTheme(e)}
        ></button>
    )
}

const mapStateToProps = (state) => ({
    SET_KEY: state.app.SET_KEY,
    SET_THEME: state.app.SET_THEME
  })
  //updating the data of the state
  const mapDispatchToProp = (dispatch) => ({
    setCurrentTheme: (data) => dispatch(setCurrentTheme(data)),
  })
  //updating the data of the state
  export default connect(mapStateToProps, mapDispatchToProp)(DarkMode);