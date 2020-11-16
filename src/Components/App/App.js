import React, { useEffect } from "react";
import AppHeader from "./AppHeader/AppHeader";
import MainContent from "./MainContent/MainContent";
import { dataToDisplayActions } from "./../../redux-ducks/dataToDisplay/index";
import { connect } from "react-redux";
import "./App.scss";

function App({ statePageSize, statePagination, setDataToDisplay }) {
  useEffect(() => {
    fetch(
      `https://www.anapioficeandfire.com/api/characters?page=${statePagination.pageNumber}&pageSize=${statePageSize.pageSize}`
    ).then(resp => resp.json().then(data => {setDataToDisplay(data)}));
  }, [statePagination,statePageSize]);

  return (
    <div className="app">
      <AppHeader />
      <MainContent />
    </div>
  );
}
const mapStateToProps = (state) => ({
  statePageSize: state.pageSize,
  statePagination: state.pagination,
});

const mapDispatchToProps = (dispatch) => ({
  setDataToDisplay: (data) => dispatch(dataToDisplayActions.setDataToDisplay(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
