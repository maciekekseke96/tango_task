import types from "./types";

const setBookUrl = (item) => ({ type: types.SET_BOOK_URL, item });
const setBookDetails = (item) => ({ type: types.SET_BOOK_DETAILS, item });

export default {
  setBookUrl,
  setBookDetails,
};
