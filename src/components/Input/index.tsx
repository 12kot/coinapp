import React, { ReactElement } from "react";
import styles from "./input.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
}

const Input = ({ className, ...rest }: Props): ReactElement => {
  return <input className={`${styles.container} ${className}`} {...rest} />;
};

export default Input;
