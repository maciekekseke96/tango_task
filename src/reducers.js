import { combineReducers } from "redux";

import { APIDataReducer } from "./redux-ducks/dataFromApi/index";
import { filtersReducer } from "./redux-ducks/filterParameters/index";
import { pageSizeReducer } from "./redux-ducks/pageSizeParameter/index";
import { paginationReducer } from "./redux-ducks/paginationParameters/index";

const rootReducer = combineReducers({
  APIData: APIDataReducer,
  filters: filtersReducer,
  pageSize: pageSizeReducer,
  pagination: paginationReducer,
});

export default rootReducer;
