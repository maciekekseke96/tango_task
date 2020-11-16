import React from "react";
import TableContent from "./TableContent/TableContent";
import FiltersSection from "./filtersSection/FiltersSection";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <div className="mainContent">
      <FiltersSection />
      <TableContent />
    </div>
  );
};

export default MainContent;
