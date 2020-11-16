import React from "react";
import { connect } from "react-redux";
import { filterActions } from "./../../../../redux-ducks/filterParameters/index";
import { dataToDisplayActions } from "./../../../../redux-ducks/dataToDisplay/index";
import "./FiltersSection.scss";

const FiltersSection = ({
  stateGenderFilter,
  stateNameFilter,
  stateDataToDisplay,
  setGenderFilter,
  setNameFilter,
  setDataToDisplay,
  statePageSize,
  statePagination,
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  stateGenderFilter: state.filters.genderFilter,
  stateNameFilter: state.filters.nameFilter,
  stateDataToDisplay: state.dataToDisplay,
  statePageSize: state.pageSize,
  statePagination: state.pagination,
});

const mapDispatchToProps = (dispatch) => ({
  setGenderFilter: (value) => dispatch(filterActions.setGender(value)),
  setNameFilter: (value) => dispatch(filterActions.setName(value)),
  setDataToDisplay: (data) =>
    dispatch(dataToDisplayActions.setDataToDisplay(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
