import React, { ReactElement } from "react";
import styles from "./tableLayout.module.scss";
import Table from "components/Table";
import { useSearchParams } from "react-router-dom";
import Search from "components/Search/index";
import Pagination from "components/Pagination";

const getActivePage = (params: string | null): number => {
  if (!params || !+params) return 0;
  return +params;
};

const TableLayout = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = getActivePage(searchParams.get("page"));

  const handleClick = (id: number) => {
    setSearchParams(`page=${id}`);
  };

  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <Search />
      </div>

      <Table activePage={activePage} />
      <Pagination handleClick={handleClick} activePage={activePage} />
    </section>
  );
};

export default TableLayout;
