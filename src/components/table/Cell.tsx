import { createTableComponent } from "helpers/createTableComponent";
import React, { FC } from "react";
import styles from "./Table.module.scss";

type CellProps = {
  percentage: number;
  textDisplay?: CanvasTextAlign;
  content: string;
  type: string;
  id: string;
  onClick?: (id: string) => void;
  onClick2?: (id: string) => void;
};

export const Cell: FC<CellProps> = ({
  percentage,
  textDisplay,
  content,
  type,
  id,
  onClick,
  onClick2,
}) => {
  const component = createTableComponent({
    type,
    content,
    onClick,
    onClick2,
    id,
  });
  return (
    <div
      className={styles.cell}
      style={{
        width: `${percentage}%`,
        textAlign: textDisplay ? textDisplay : "start",
      }}
    >
      {component}
    </div>
  );
};
