import Pagination from "components/Pagination";
import Table from "components/TableContent";
import SearchItemsContextProvider from "contexts/SearchItemsContextProvider";
import React, { ReactElement } from "react";
import { TCoin } from "types/coin";

interface Props {
  searchItems: TCoin[];
  activePage: number;
  handlePageClick: (id: number) => void;
}

const TableLayout = ({
  searchItems,
  activePage,
  handlePageClick,
}: Props): ReactElement => {
  return (
    <>
      <SearchItemsContextProvider coins={searchItems}>
        <Table activePage={activePage} />
      </SearchItemsContextProvider>

      <Pagination handleClick={handlePageClick} activePage={activePage} />
    </>
  );
};

export default TableLayout;
