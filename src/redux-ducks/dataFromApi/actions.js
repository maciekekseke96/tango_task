import types from "./types";

const setDataFromAPI = (item) => ({ type: types.SET_DATA_FROM_API, item });

export default {
  setDataFromAPI,
};
