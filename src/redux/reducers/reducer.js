import {
  SEARCH_SOCIO,
  LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS
} from "../actionsTypes";

const initialState = {
  //socios: [],
  socio: null,
  loading: false,
  errors: {}
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SOCIO:
      return {
        ...state,
        socio: action.payload
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true
      };
    case SET_ERRORS:
      return {
        ...state,
        socio: null,
        loading: false,
        errors: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: {}
      };
    default:
      return state;
  }
};

export default Reducer;
