import { combineReducers } from "redux";

import { dataToDisplayReducer } from "./redux-ducks/dataToDisplay/index";
import { filtersReducer } from "./redux-ducks/filterParameters/index";
import { pageSizeReducer } from "./redux-ducks/pageSizeParameter/index";
import { paginationReducer } from "./redux-ducks/paginationParameters/index";

const rootReducer = combineReducers({
  dataToDisplay: dataToDisplayReducer,
  filters: filtersReducer,
  pageSize: pageSizeReducer,
  pagination: paginationReducer,
});

export default rootReducer;
