import React from "react";
import TableContent from "./TableContent/TableContent";
import FiltersSection from "./FiltersSection/FiltersSection";
import Pagination from "./Pagination/Pagination";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <div className="mainContent">
      <FiltersSection />
      <TableContent />
      <Pagination/>
    </div>
  );
};

export default MainContent;
