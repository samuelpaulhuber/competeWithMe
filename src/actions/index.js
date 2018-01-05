import axios from 'axios';
export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_DRILLS = 'LOAD_DRILLS';
export const LOGIN = 'LOGIN';
export const ERROR = 'ERROR';
export const DRILL_SELECTED = 'DRILL_SELECTED';
export const GET_DRILL = 'GET_DRILL';
export const LOAD_DRILL = 'LOAD_DRILL';
export const UPDATE_DRILL = 'UPDATE_DRILL';
export const ADD_DRILL = 'ADD_DRILL';
export const DELETE_DRILL = 'DELETE_DRILL';
export const REMOVE_ACTIVE_DRILL = 'REMOVE_ACTIVE_DRILL';

const ROOT_URL = 'http://localhost:3000/compete';

export function removeActiveDrill(){
  console.log('removing');
  return {
    type: REMOVE_ACTIVE_DRILL,
    payload: null
  }
}

export function deleteDrill(dispatch, drill, callback){
  const request = axios.post(`${ROOT_URL}/deleteDrill`, drill,{
    headers: {
      'x-access-token': localStorage.getItem('CompeteWithMeToken')
    }
  })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });

  return {
    type: DELETE_DRILL,
    payload: request
  }
}

export function addDrill(dispatch, drill, callback){
  const request = axios.post(`${ROOT_URL}/addDrill`, drill,{
      headers: {
        'x-access-token': localStorage.getItem('CompeteWithMeToken')
      }
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });

  return {
    type: ADD_DRILL,
    payload: request
  }
}

export function updateDrill(dispatch, drill, callback){
  const request = axios.post(`${ROOT_URL}/updateDrill`, drill,{
      headers: {
        'x-access-token': localStorage.getItem('CompeteWithMeToken'),
      }
    })
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });

  return {
    type: UPDATE_DRILL,
    payload: request
  }
}

export function loadDrill() {
  const drill = {
    name: 'Four Aces',
    image: 'https://static1.squarespace.com/static/5928efc53a041194d4290832/t/59baf9cfb078698e4757fb93/1505425880621/Double+Reload+Double.png?format=1500w',
    procedure: `At the standard distance of seven yards, I have selected a 2.5 second goal time. This allows for a 1 second draw, a 1.1 second reload, and two .2 second splits. If you find yourself unable to make that 2.5 second goal time, carefully go through the data from the timer and find the “low hanging fruit”.
      Now, I feel like I should point out that some people can go much faster than the 2.5 second goal time. It is possible to get a draw time into the .60s and a reload time into the .70s (I have heard some reported times even faster than that). The sky is absolutely the limit on this drill.
      In order to be competitive in the sport, you don’t need some insane reload time like a .75, but you do need to be able to reload the gun in about 1 second flat on a fairly consistent basis in practice. If you can’t do it, you are going to have a problem.
      The key to this drill is dryfire training, this is just a “check” for you to make sure you are headed in the right direction.`
  };

  return {
    type: LOAD_DRILL,
    payload: drill
  };
}

export function selectDrill(drill) {
  return {
    type: DRILL_SELECTED,
    payload: drill
  };
}

export function getDrill(id, dispatch) {
  const request = axios.post(`${ROOT_URL}/login`, values)
    .catch((err) => {
      dispatch({
        type: ERROR,
        payload: err
      });
    });

  return {
    type: GET_DRILL,
    payload: request
  }
}

export function login(values, dispatch) {
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
