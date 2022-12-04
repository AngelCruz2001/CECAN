import { ITable } from "interfaces/ITable.interface";
import React, { FC } from "react";
import { Body } from "./Body";
import { Headers } from "./Headers";
import styles from "./Table.module.scss";

export const Table: FC<ITable> = (props) => {
  return (
    <div className={styles.container}>
      <Headers
        headers={props.headers}
        percentages={props.percentages}
        textDisplay={props.textDisplay}
      />
      <Body {...props} />
    </div>
  );
};
