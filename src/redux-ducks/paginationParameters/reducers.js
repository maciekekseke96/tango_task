import types from "./types";

const INITIAL_STATE = {
  pageNumber: 1,
};

const paginationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_PAGE_NUMBER:
      return { ...state, pageNumber: action.item };
    default:
      return state;
  }
};

export default paginationReducer;

