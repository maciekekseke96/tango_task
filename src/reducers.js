import { combineReducers } from "redux";
import { dataToDisplayReducer } from "./redux-ducks/dataToDisplay/index";
import { filtersReducer } from "./redux-ducks/filterParameters/index";
import { pageSizeReducer } from "./redux-ducks/pageSizeParameter/index";
import { paginationReducer } from "./redux-ducks/paginationParameters/index";
import { bookDetailsReducer } from "./redux-ducks/bookDetails/index";
const rootReducer = combineReducers({
  dataToDisplay: dataToDisplayReducer,
  filters: filtersReducer,
  pageSize: pageSizeReducer,
  pagination: paginationReducer,
  bookDetails: bookDetailsReducer,
});

export default rootReducer;
