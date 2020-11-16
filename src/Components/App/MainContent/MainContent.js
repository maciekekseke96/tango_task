import React from "react";
import TableContent from "./TableContent/TableContent";
import FiltersSection from "./FiltersSection/FiltersSection";
import Pagination from "./Pagination/Pagination";
import LoadingScreen from "./LoadingScreen/LoadingScreen";
import {connect} from "react-redux"
import "./MainContent.scss";

const MainContent = ({stateDataToDisplay}) => {
  return (
    <div className="mainContent">
      <FiltersSection />
      {stateDataToDisplay?<TableContent />:<LoadingScreen />}
      <Pagination />
    </div>
  );
};

const mapStateToProps = (state) => ({
  stateDataToDisplay: state.dataToDisplay.data,
});

export default connect(mapStateToProps, {})(MainContent);
