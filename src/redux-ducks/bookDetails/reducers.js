import types from "./types";

const INITIAL_STATE = {
  url: false,
  data: false,
};

const bookDetailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_BOOK_URL:
      return { ...state, url: action.item };
    case types.SET_BOOK_DETAILS:
      return { ...state, data: action.item };
    default:
      return state;
  }
};

export default bookDetailsReducer;
