import types from "./types";

const INITIAL_STATE = {
  genderFilter: "Male",
  nameFilter: "",
};

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_GENDER_FILTER:
      return { ...state, genderFilter: action.item };
    case types.SET_NAME_FILTER:
      return { ...state, nameFilter: action.item };
    default:
      return state;
  }
};

export default filtersReducer;
