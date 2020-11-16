import types from "./types";

const setPageSize = (item) => ({ type: types.SET_PAGE_SIZE, item });

export default {
  setPageSize,
};
