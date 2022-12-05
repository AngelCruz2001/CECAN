import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AddMedicineButton.module.scss";
export const AddMedicineButton = ({
  showModal,
}: {
  showModal: VoidFunction;
}) => {
  return (
    <div className={styles.container} onClick={showModal}>
      <hr />
      <button>
        <FontAwesomeIcon icon={faPlusCircle} />
      </button>
      <hr />
    </div>
  );
};
