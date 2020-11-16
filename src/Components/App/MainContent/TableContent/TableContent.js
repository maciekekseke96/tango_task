import React from "react";
import { connect } from "react-redux";
import "./TableContent.scss";

const TableContent = ({ stateDataFromAPI }) => {
  return (
    stateDataFromAPI && (
      <table className="charactersTable">
        <thead></thead>
        <tbody></tbody>
      </table>
    )
  );
};

const mapStateToProps = (state) => ({
  stateDataFromAPI: state.APIData,
});

export default connect(mapStateToProps, {})(TableContent);
