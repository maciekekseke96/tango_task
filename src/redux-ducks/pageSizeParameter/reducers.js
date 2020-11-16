import types from "./types";

const INITIAL_STATE = {
  pageSize: 5,
};

const pageSizeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_PAGE_SIZE:
      return { ...state, pageSize: action.item };
    default:
      return state;
  }
};

export default pageSizeReducer;

