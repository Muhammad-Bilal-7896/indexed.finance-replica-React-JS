import crypto from "../../UI/symbol.JPEG XR";
import crypto2 from "../../UI/symbol-2.JPEG XR";

const INITIAL_STATE = {
  SET_KEY: false,
  SET_THEME: "light",
  SET_MODAL: false,
  SET_DATA: {
      Title: "Cryptocurrency Top 10 Index [CC10]",
      price: "$80",
      percentage: "(-0.1%)",
      symbol: crypto,
      symbol2:crypto2,
      lineChartData: {
        datasets: [{
          data: [
            35,
            33,
            36,
            23,
            30,
            27,
            25,
            28,
            38,
            40
          ],

          backgroundColor: [
            '#bdfefe',
          ],
          borderColor: [
            '#89ffff',
          ],
          label: 'Dataset 1',
          pointRadius: 6,
        }],
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'A Chart Line for currency'
          },
        },
        labels: ['OMG', 'MKR', 'UMA', 'YFI', 'CRU', 'SNX', 'COMP', 'AAVE', 'UNI', 'LINK'],
      },
      PieChartData: {
        datasets: [{
          data: [
            8,
            15,
            10,
            20,
            20,
            18,
            20,
            40,
            40,
            50
          ],
          backgroundColor: [
            '#a39e9e',
            '#e5e5e5',
            '#c1ffff',
            '#a3ffff',
            '#84ffff',
            '#66ffff',
            '#51cccc',
            '#3d9999',
            '#286666',
            '#143333',
          ],
          borderColor: [
            'rgba(81,81,81,255)',
            'rgba(81,81,81,255)',
            'rgba(81,81,81,255)',
            'rgba(81,81,81,255)',
            'rgba(81,81,81,255)',
            'rgba(81,81,81,255)',
            'rgba(81,81,81,255)',
            'rgba(81,81,81,255)',
            'rgba(81,81,81,255)',
            'rgba(81,81,81,255)',
          ],
          label: 'Dataset 1'
        }],
        options: {
          legend: {
            display: false //This will do the task
          }
        },
        labels: ['OMG', 'MKR', 'UMA', 'YFI', 'CRU', 'SNX', 'COMP', 'AAVE', 'UNI', 'LINK'],
      },
      Address: "0X17AC . . . ADF3",
      Supply: "393 , 877.81 CC10",
      Volume: "$ 2 , 460 , 316.56",
      TVL: "$ 31 , 510 , 043.09"
    }
}
export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "SETCURRENTKEY":
      return ({
        ...state,
        SET_KEY: action.data
      })
    case "SETCURRENTTHEME":
      return ({
        ...state,
        SET_THEME: action.data
      })
    case "SETMODALVALUE":
      return ({
        ...state,
        SET_MODAL: action.data
      })
    case "SETDATAVALUE":
      return ({
        ...state,
        SET_DATA: action.data
      })
  }
  return state;
}