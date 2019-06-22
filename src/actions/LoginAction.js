import axios from "axios";

export const START_LOGGIN = "START_LOGGIN";
export const FAILURE_LOGGIN = "FAILURE_LOGGIN";
export const SUCCESS_LOGGIN = "SUCCESS_LOGGIN";

const api = "https://backendfoodtruck.herokuapp.com";

export const fetchLogin = user => dispatch => {
  dispatch({ type: START_LOGGIN }, user);
  return axios
    .post(`${api}/login`)
    .then(res => {
      console.log(res);
      return true;
    })
    .catch(err => {
      console.log(err);
    });
};
