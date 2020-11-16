import React from "react";
import { connect } from "react-redux";
import { paginationActions } from "./../../../../redux-ducks/paginationParameters/index";
import "./Pagination.scss";

const Pagination = ({ statePageNumber, setPageNumber }) => {
  const handlePageNumber = (instruction) => {
    switch (instruction) {
      case "first":
        setPageNumber(1);
        break;
      case "+":
        setPageNumber(statePageNumber + 1);
        break;
      case "-":
        if (statePageNumber !== 1) {
          setPageNumber(statePageNumber - 1);
        } else {
          alert("You are on the first page. No previous pages");
        }
    }
  };
  return (
    <div className="pagination">
      <button
        onClick={(event) => {
          event.preventDefault();
          handlePageNumber("first");
        }}
      >
        First Page
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          handlePageNumber("-");
        }}
      >
        Prev Page
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          handlePageNumber("+");
        }}
      >
        Next Page
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          handlePageNumber("first");
        }}
      >
        Last Page
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  statePageNumber: state.pagination.pageNumber,
});

const mapDispatchToProps = (dispatch) => ({
  setPageNumber: (number) => dispatch(paginationActions.setPageNumber(number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
