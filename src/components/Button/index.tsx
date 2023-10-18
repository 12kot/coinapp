import React, { ReactElement } from "react";
import styles from "./button.module.scss";

interface Props {
  text: string;
}

const Button = ({ text }: Props): ReactElement => {
  return <button className={styles.container}>{text}</button>;
};

export default Button;
