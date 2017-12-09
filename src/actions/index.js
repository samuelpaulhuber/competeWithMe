import axios from 'axios';
// import {dispatch} from 'react-redux';
export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DRILLS = 'LOAD_DRILLS';
export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';
const ROOT_URL = 'http://localhost:3000/compete';

export function login(values, dispatch) {
  // axios.post(`${ROOT_URL}/login`, values)
  // .then(resp => {
  //   return {type: LOGIN, payload: resp};//dispatch({type: LOGIN, payload: resp});
  // })
  //return {type: ''};

  const request = axios.post(`${ROOT_URL}/login`, values)
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });

  return {
    type: LOGIN,
    payload: request
  }
}
export function LoadDefaultDrills(dispatch){
  var token = JSON.parse(localStorage.getItem('CompeteWithMeToken'));

  const request = axios.post(`${ROOT_URL}/getDrills`, token)
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });
  return {
    type: LOAD_DRILLS,
    payload: request
  };
}

export function LoadDefaultData(id){
  return {
    type: LOAD_DATA,
    payload: {"1": {
    "id": "1",
      "bulletManufacturer": "Blue Bullets",
      "bulletWeight": "147",
      "powderManufacturer": "Titegroup",
      "powderCharge": "3.2",
      "primerManufacturer": "CCI",
      "primerType": "500 Small Pistol",
      "oal": "1.10",
      "majorLoad": "false"
  },
  "2": {
    "id": "2",
      "bulletManufacturer": "Blue Bullets",
      "bulletWeight": "124",
      "powderManufacturer": "Titegroup",
      "powderCharge": "4.1",
      "primerManufacturer": "CCI",
      "primerType": "500 Small Pistol",
      "oal": "1.10",
      "majorLoad": "false"
  }}
  };
}
