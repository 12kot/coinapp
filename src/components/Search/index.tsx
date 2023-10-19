import React, { ReactElement, useRef } from "react";
import useClickOutside from "utils/hooks/useClickOutside";
import styles from "./input.module.scss";

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
    setTimeout(() => {
      setActive((val) => !val);
    }, 300);
  };

  const onClickTrue = () => {
    setActive(true);
  };

  const listref = useRef(null);
  useClickOutside(listref, onClick, active);

  return (
    <input
      className={styles.container}
      ref={listref}
      placeholder="Tether.."
      value={value}
      onClick={onClickTrue}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Seacrh;
