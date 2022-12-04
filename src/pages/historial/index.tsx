import React from "react";
import { NextPage } from "next";
import styles from "styles/modules/GenerateRecipe.module.scss";
import { Sidebar, TitleScreen, TopBar } from "components";
import { Table } from "../../components/table/Table";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
  setActivePrescriptionHistory,
  deletePrescription,
} from "store/historial/historialSlice";
import { ITable } from "../../interfaces/ITable.interface";

const Historial: NextPage = () => {
  const { prescriptions } = useAppSelector((state) => state.historial);
  const dispatch = useAppDispatch();

  const tableElements: ITable = {
    headers: [
      { id: "folio", label: "Folio" },
      { id: "patient_name", label: "Nombre del paciente" },
      { id: "created_at", label: "Fecha de expedición" },
      { id: "supplied_at", label: "Fecha de suministro" },
      { id: "status", label: "Estatus" },
      { id: "actions", label: "Acciones" },
    ],
    rows: prescriptions,
    percentages: [10, 25, 15, 15, 15, 20],
    elements: ["TEXT", "TEXT", "TEXT", "TEXT", "TEXT", "ACTIONS-P-E-D"],
    textDisplay: ["center", "center", "center", "center", "center", "center"],
    onClick: (key: number) => {
      dispatch(setActivePrescriptionHistory(key));
    },
    onClick2: (key: number) => {
      dispatch(deletePrescription(key));
      console.log(key);
    },
  };

  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title="Historial de recetas" />
      <div className={styles.content}>
        <Sidebar />
        <Table {...tableElements} />
      </div>
    </div>
  );
};

export default Historial;
