import types from "./types";

const INITIAL_STATE = {
  data: false,
};

const APIDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_DATA_FROM_API:
      return { ...state, data: action.item };
    default:
      return state;
  }
};

export default APIDataReducer;
