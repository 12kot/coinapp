import React, { ReactElement, ReactNode, useRef } from "react";
import styles from "./modal.module.scss";
import useClickOutside from "utils/hooks/useClickOutside";

interface Props {
  isActive: boolean;
  setIsActive: () => void;
  children: ReactNode;
}

const Modal = ({ isActive, setIsActive, children }: Props): ReactElement => {
  const ref = useRef(null);
  useClickOutside(ref, setIsActive, isActive);

  return (
    <main className={`${styles.container} ${isActive && styles.active}`}>
      <section className={styles.modal} ref={ref}>
        <div className={styles.close} onClick={setIsActive}>
          ✖
        </div>
        {children}
      </section>
    </main>
  );
};

export default Modal;
