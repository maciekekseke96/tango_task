import types from "./types";

const INITIAL_STATE = {
  data: false,
};

const dataToDisplayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_DATA_TO_DISPLAY:
      return { ...state, data: action.item };
    default:
      return state;
  }
};

export default dataToDisplayReducer;
