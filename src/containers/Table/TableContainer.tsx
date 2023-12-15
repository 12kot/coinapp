import React, { ReactElement, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Search from "components/Search/index";
import { TCoin } from "types/coin";
import { useSearch } from "utils/hooks/useSearch";
import styles from "./tableLayout.module.scss";
import TableLayout from "layouts/Table/TableLayout";

const getActivePage = (params: string | null): number => {
  if (!params || !+params) return 0;
  return +params;
};

const TableContainer = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = getActivePage(searchParams.get("page"));

  const [search, setSearch] = useState<string>("");
  const { data: searchItems } = useSearch<{ data: TCoin[] }>(search);

  const handlePageClick = (id: number) => {
    setSearchParams(`page=${id}`);
  };

  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <Search value={search} setValue={setSearch} />
      </div>

      <TableLayout
        activePage={activePage}
        handlePageClick={handlePageClick}
        searchItems={searchItems?.data || []}
      />
    </section>
  );
};

export default TableContainer;
