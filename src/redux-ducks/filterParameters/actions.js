import types from "./types";

const setGender = (item) => ({ type: types.SET_GENDER_FILTER, item });
const setName = (item) => ({ type: types.SET_NAME_FILTER, item });

export default {
  setGender,
  setName,
};
