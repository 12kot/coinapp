import React, { ReactElement } from "react";
import styles from "./button.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  isActive: boolean;
}

const Button = ({ text, isActive, ...rest }: Props): ReactElement => {
  console.log(rest.className);
  return (
    <button className={`${styles.container} ${isActive && styles.active}`} {...rest}>
      {text}
    </button>
  );
};

export default Button;
