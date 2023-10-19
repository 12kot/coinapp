import React, { ReactElement, useState } from "react";
import styles from "./tableLayout.module.scss";
import Table from "components/Table";
import { useSearchParams } from "react-router-dom";
import Search from "components/Search/index";
import Pagination from "components/Pagination";
import { TCoin } from "types/coin";
import { useSearch } from "utils/hooks/useSearch";

const getActivePage = (params: string | null): number => {
  if (!params || !+params) return 0;
  return +params;
};

const TableLayout = (): ReactElement => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activePage = getActivePage(searchParams.get("page"));

  const [search, setSearch] = useState<string>("");
  const { data: searchItems } = useSearch<{data: TCoin[]}>(search);

  const handlePage = (id: number) => {
    setSearchParams(`page=${id}`);
  };

  return (
    <section className={styles.container}>
      <div className={styles.search}>
        <Search value={search} setValue={setSearch} />
      </div>

      <Table activePage={activePage} searchItems={searchItems?.data} />
      <Pagination handleClick={handlePage} activePage={activePage} />
    </section>
  );
};

export default TableLayout;
