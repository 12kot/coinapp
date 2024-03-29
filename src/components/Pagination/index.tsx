import React, { ReactElement } from "react";
import styles from "./pagination.module.scss";
import scrollToElement from "utils/services/scroll";
import Button from "components/Buttons/Button";

const getPages = (
  activePage: number,
  callback: (id: number) => void
): ReactElement[] => {
  const maxPage = 20;
  let step = 2;
  if (activePage - 2 <= 0) step = activePage;
  if (activePage + 2 >= maxPage) step = Math.abs(maxPage - activePage - 5);

  const handleClick = (pageNum: number) => {
    callback(pageNum);
    scrollToElement("thead");
  };

  return [...new Array(5)].map((num, i) => {
    const pageNum = activePage + i - step + 1;

    return (
      <Button
        className={styles.button}
        onClick={() => handleClick(pageNum - 1)}
        text={pageNum + ""}
        isActive={!!(activePage + 1 === pageNum)}
        key={i}
      />
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
