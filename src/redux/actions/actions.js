import {
  SEARCH_SOCIO,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS
} from "../actionsTypes";
import axios from "axios";

export const searchSocio = data => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/socio/${data}`)
    .then(res => {
      dispatch({ type: SEARCH_SOCIO, payload: res.data });
      dispatch({ type: CLEAR_ERRORS });
    })
    .catch(err => {
      dispatch({ type: SET_ERRORS, payload: err.response.data });
    });
};

export const isLoading = () => ({
  type: LOADING_UI
});

/*export const getSocio = data => {
  searchSocio(data);
  //dispatch(isLoading());
  //dispatch(searchSocio(data));
};*/

/*export const searchSocio = data => dispatch => {
  dispatch({ type: LOADING_UI });
  
};*/
