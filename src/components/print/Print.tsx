import { faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "styles/modules/Components.module.scss";

export const Print = ({ id }: { id: number }) => {
  return (
    <button className={styles.button} onClick={() => console.log(id)}>
      <FontAwesomeIcon icon={faPrint} />
    </button>
  );
};
