import { SEARCH_SOCIO, IS_LOADING } from "./actionsTypes";

const initialState = {
  socios: [],
  socio: {},
  isLoading: false
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SOCIO:
      return state;
    default:
      return state;
  }
};

export default Reducer;
