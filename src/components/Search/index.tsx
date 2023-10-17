import React, { ReactElement, useRef } from "react";
import styles from "./search.module.scss";
import useOnClickOutside from 'utils/hooks/useClickOutside'

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Seacrh = ({
  value,
  setValue,
  active,
  setActive,
}: Props): ReactElement => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClick = () => {
    setActive((val) => !val);
  };

  const onClickTrue = () => {
    setActive(true);
  };

  const listref = useRef(null);
  useOnClickOutside(listref, onClick, active);

  return (
    <input
      ref={listref}
      className={styles.container}
      placeholder="Tether.."
      value={value}
      onClick={onClickTrue}
      onChange={(e) => handleChange(e)}
    ></input>
  );
};

export default Seacrh;
