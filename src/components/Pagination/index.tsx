import React, { ReactElement } from "react";
import styles from "./pagination.module.scss";

const getPages = (
  activePage: number,
  callback: (id: number) => void
): ReactElement[] => {
  const maxPage = 20;
  let step = 2;
  if (activePage - 2 <= 0) step = activePage;
  if (activePage + 2 >= maxPage) step = Math.abs(maxPage - activePage - 5);

  return [...new Array(5)].map((num, i) => {
    const pageNum = activePage + i - step + 1;

    return (
      <button
        className={`${styles.page} ${
          activePage + 1 === pageNum && styles.active
        }`}
        onClick={() => callback(pageNum - 1)}
        key={i}
      >
        {pageNum}
      </button>
    );
  });
};

interface Props {
  activePage: number;
  handleClick: (id: number) => void;
}

const Pagination = ({ activePage, handleClick }: Props): ReactElement => {
  return (
    <div className={styles.container}>{getPages(activePage, handleClick)}</div>
  );
};

export default Pagination;
