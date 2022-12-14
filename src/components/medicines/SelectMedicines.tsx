import React, { FC } from "react";
import { Table } from "components";
import { IMedicineCatalog } from "../../interfaces/IMedicineStock.interface";
import { ITable } from "../../interfaces/ITable.interface";
import { useAppDispatch } from "hooks/hooks";
import { addActiveMedicine } from "store/recipes/recipesSlice";
import styles from "./Medicines.module.scss";
// import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
type Props = {
  medicines: IMedicineCatalog[] | null;
};
export const SelectMedicines: FC<Props> = ({ medicines }) => {
  const dispatch = useAppDispatch();
  const tableElements: ITable = {
    headers: [
      { id: "key", label: "Clave" },
      { id: "name", label: "Nombre" },
      { id: "add", label: "" },
    ],
    rows: medicines,
    percentages: [25, 50, 25],
    elements: ["TEXT", "TEXT", "ADD"],
    textDisplay: ["center", "center", "center"],
    onClick: (key: string) => {
      console.log("caca")
      // dispatch(addActiveMedicine(key));
    },
  };

  return (
    <div className={styles.container}>
      <h2>Lista de medicamentos</h2>
    

      <Table {...tableElements} />
    </div>
  );
};
