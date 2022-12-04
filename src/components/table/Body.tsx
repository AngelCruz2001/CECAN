import { IMedicineStock } from "interfaces/IMedicineStock.interface";
import React, { FC } from "react";
import { Cell } from "./Cell";
import styles from "./Table.module.scss";
import { IMedicine } from "../../interfaces/IMedicineStock.interface";
import { ITable } from "interfaces/ITable.interface";

export const Body: FC<ITable> = ({
  headers,
  rows,
  percentages,
  textDisplay,
  elements,
  onClick,
  onClick2,
}) => {
  if (!rows) return null;
  return (
    <div className={styles.body}>
      {rows.map((row, index) => (
        <div key={index} className={styles.row}>
          {headers.map(({ id }, index) => (
            <Cell
              id={row.key}
              key={index}
              textDisplay={textDisplay ? textDisplay[index] : "start"}
              content={row[id]}
              percentage={percentages[index]}
              type={elements[index]}
              onClick={onClick}
              onClick2={onClick2}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
