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

const Button = ({ text, isActive, className, ...rest }: Props): ReactElement => {
  return (
    <button className={`${styles.container} ${isActive && styles.active} ${className}`} {...rest}>
      {text}
    </button>
  );
};

export default Button;
