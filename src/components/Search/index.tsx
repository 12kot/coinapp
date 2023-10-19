import React, { ReactElement } from "react";
import styles from "./input.module.scss";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Seacrh = ({ value, setValue }: Props): ReactElement => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <input
      className={styles.container}
      placeholder="Ethereum.."
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default Seacrh;
