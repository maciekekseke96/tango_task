import React from "react";
import { connect } from "react-redux";
import { filterActions } from "./../../../../redux-ducks/filterParameters/index";
import { pageSizeActions } from "./../../../../redux-ducks/pageSizeParameter/index";
import { dataToDisplayActions } from "./../../../../redux-ducks/dataToDisplay/index";
import "./FiltersSection.scss";

const FiltersSection = ({
  stateGenderFilter,
  stateNameFilter,
  stateDataToDisplay,
  statePageSize,
  statePagination,
  setGenderFilter,
  setNameFilter,
  setDataToDisplay,
  setPageSize,
}) => {
  const handleDataFilter = () => {
  
    let newDataToDisplay = [];
    if (stateNameFilter.length < 1) {
      newDataToDisplay = stateDataToDisplay.data.filter(
        (item) => item.gender === stateGenderFilter
      );
    } else {
      newDataToDisplay = stateDataToDisplay.data.filter(
        (item) =>
          item.gender === stateGenderFilter &&
          (item.aliases.includes(stateNameFilter) ||
            item.name.includes(stateNameFilter))
      );
    }

    setDataToDisplay(newDataToDisplay);
  };

  const clearFilter = () => {
    setPageSize(5);
    fetch(
      `https://www.anapioficeandfire.com/api/characters?page=${statePagination.pageNumber}&pageSize=${statePageSize.pageSize}`
    ).then((resp) =>
      resp.json().then((data) => {
        setDataToDisplay(data);
      })
    );
  };
  return (
    <div className="filtersSection">
      <label>Gender</label>
      <select
        value={stateGenderFilter}
        onChange={(event) => {
          setGenderFilter(event.target.value);
        }}
      >
        <option>Male</option>
        <option>Female</option>
      </select>
      <label>Name</label>
      <input
        onChange={(event) => {
          setNameFilter(event.target.value);
        }}
        type="text"
        value={stateNameFilter}
        placeholder="Name filter"
      ></input>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleDataFilter();
        }}
      >
        Filter
      </button>
      <button
        onClick={(event) => {
          event.preventDefault();
          clearFilter();
        }}
      >
        Clear Filter
      </button>
      <label>1 Screen Ammount</label>
      <select
        className="pageSize"
        value={statePageSize}
        onChange={(event) => {
          setPageSize(event.target.value);
        }}
      >
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  stateGenderFilter: state.filters.genderFilter,
  stateNameFilter: state.filters.nameFilter,
  stateDataToDisplay: state.dataToDisplay,
  statePageSize: state.pageSize.pageSize,
  statePagination: state.pagination,
});

const mapDispatchToProps = (dispatch) => ({
  setGenderFilter: (value) => dispatch(filterActions.setGender(value)),
  setNameFilter: (value) => dispatch(filterActions.setName(value)),
  setPageSize: (value) => dispatch(pageSizeActions.setPageSize(value)),
  setDataToDisplay: (data) =>
    dispatch(dataToDisplayActions.setDataToDisplay(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
