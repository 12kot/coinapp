import React, { ReactElement, ReactNode, useRef } from "react";
import styles from "./modal.module.scss";
import useClickOutside from "utils/hooks/useClickOutside";

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({ isActive, setIsActive, children }: Props): ReactElement => {
  const handleOpen = () => {
    setIsActive((val) => !val);
  };

  const ref = useRef(null);
  useClickOutside(ref, handleOpen, isActive);

  return (
    <main className={`${styles.container} ${isActive && styles.active}`}>
      <section className={styles.modal} ref={ref}>
        <div className={styles.close} onClick={handleOpen}>
          ✖
        </div>
        {children}
      </section>
    </main>
  );
};

export default Modal;
