import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "styles/modules/Components.module.scss";

export const Print = ({ id, onClick }: { id: string; onClick: () => void }) => {
  const handlePrint = () => {
    onClick();
  };

  return (
    <button className={styles.button} onClick={handlePrint}>
      <h2>Imprimir</h2>
      <FontAwesomeIcon icon={faPrint} />
    </button>
  );
};
