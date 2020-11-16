import React, { useEffect } from "react";
import AppHeader from "./AppHeader/AppHeader";
import MainContent from "./MainContent/MainContent";
import { APIDataActions } from "./../../redux-ducks/dataFromApi/index";
import { connect } from "react-redux";
import "./App.scss";

function App({ statePageSize, statePagination, setDataFromAPI }) {
  useEffect(() => {
    fetch(
      `https://www.anapioficeandfire.com/api/characters?page=${statePagination.pageNumber}&pageSize=${statePageSize.pageSize}`
    ).then(resp => resp.json().then(data => {setDataFromAPI(data)}));
  }, []);

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
  setDataFromAPI: (data) => dispatch(APIDataActions.setDataFromAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
