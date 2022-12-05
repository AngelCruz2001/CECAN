import React, { FC } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
}
export const Modal: FC<ModalProps> = ({ children }) => {
  return <div className={styles.modal}>{children}</div>;
};
