import { FC, useEffect, useState } from "react";
import { IMedicine } from "../../interfaces/IMedicineStock.interface";
import { ITable } from "../../interfaces/ITable.interface";
import {
  modifyActiveMedicinesQuantity,
  removeActiveMedicine,
  setActiveIndication,
} from "store/recipes/recipesSlice";
import { useAppDispatch } from "../../hooks/hooks";
import { Table } from "components";

import styles from "./Prescription.module.scss";

type Props = {
  activeMedicines: IMedicine[] | null;
};
export const GeneratePrescription: FC<Props> = ({ activeMedicines }) => {
  const dispatch = useAppDispatch();

  const tableElements: ITable = {
    headers: [
      { id: "key", label: "Clave" },
      { id: "name", label: "Nombre" },
      { id: "quantity", label: "Cantidad" },
      { id: "remove", label: "" },
    ],
    rows: activeMedicines,
    percentages: [10, 30, 30, 20],
    textDisplay: ["center", "center", "center", "center"] as CanvasTextAlign[],
    elements: ["TEXT", "TEXT", "COUNTER", "REMOVE"],
    onClick: (key: string, quantity: number) => {
      dispatch(modifyActiveMedicinesQuantity({ key, quantity }));
    },
    onClick2: (key: string) => {
      dispatch(removeActiveMedicine(key));
    },
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setActiveIndication(e.target.value));
  };

  const handleGeneratePrescription = () => {
    console.log("Prescription generated");
    // TODO: Generate prescription
  };
  return (
    <>
      <Table {...tableElements} />

      <div className={styles.indications}>
        <textarea
          className={styles.textArea}
          placeholder="Indicaciones"
          name="indication"
          cols={30}
          rows={10}
          onChange={handleOnChange}
        />
        <button onClick={handleGeneratePrescription}>Generar Receta</button>
      </div>
    </>
  );
};
