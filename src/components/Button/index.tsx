import React, { ReactElement } from "react";
import styles from "./button.module.scss";

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string;
}

const Button = ({ text, ...rest }: Props): ReactElement => {
  return <button className={styles.container} {...rest}>{text}</button>;
};

export default Button;
