import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, text } from "@fortawesome/fontawesome-svg-core";
import {
  faAdd,
  faPenToSquare,
  faPrint,
  faTrash,
  faTrashRestore,
} from "@fortawesome/free-solid-svg-icons";
import styles from "styles/modules/Components.module.scss";
import { useState } from "react";
import { Counter } from "components/counter/Counter";
import { IOnClick } from "../interfaces/ITable.interface";
import { Print, SelectUser } from "components";

interface TableComponentDetails extends IOnClick {
  type: string;
  content: string | number;
  id: string;
}

export const createTableComponent = (details: TableComponentDetails) => {
  const { type, content, onClick, onClick2, id } = details;
  switch (type) {
    case "TEXT":
      return <p key={id}>{content}</p>;
    case "EDIT-BUTTON":
      return (
        <button className={styles.button} onClick={() => onClick!(id)}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      );
    case "COUNTER":
      return (
        <Counter initialValue={content as number} id={id} onChange={onClick!} />
      );
    case "REMOVE":
      return (
        <button className={styles.button} onClick={() => onClick2!(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      );
    case "ADD":
      return (
        <button className={styles.button} onClick={() => onClick(id)}>
          Agregar
        </button>
      );
    case "ACTIONS-P-E-D":
      return (
        <div className={styles.actions}>
          <Print id={id} />
          <button className={styles.button} onClick={() => onClick(id)}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button className={styles.button} onClick={() => onClick(id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      );
    case "DETAILS":
      return (
        <button className={styles.buttonDetails} onClick={() => onClick(id)}>
          Detalles
        </button>
      );

    case "SELECT-USER":
      return <SelectUser idDepartment={id} onClick={onClick!} />;

    default:
      return <div key={id}>{content}</div>;
  }
};
