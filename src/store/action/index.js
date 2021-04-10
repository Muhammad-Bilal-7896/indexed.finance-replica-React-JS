

const setCurrentKey = (data) => {
  //  console.log("The key is: ", key)
    return (dispatch) => {
        dispatch({ type: "SETCURRENTKEY", data: data })
    }
}

const setCurrentTheme = (data) => {
    //  console.log("The key is: ", key)
      return (dispatch) => {
          dispatch({ type: "SETCURRENTTHEME", data: data })
      }
  }


  const setModalValue = (data) => {
    //  console.log("The key is: ", key)
      return (dispatch) => {
          dispatch({ type: "SETMODALVALUE", data: data })
      }
  }

  const setDataValue = (data) => {
    //  console.log("The key is: ", key)
      return (dispatch) => {
          dispatch({ type: "SETDATAVALUE", data: data })
      }
  }


export {
    setCurrentKey,
    setCurrentTheme,
    setModalValue,
    setDataValue
}