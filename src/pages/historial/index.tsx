import React, { useEffect } from "react";
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
import {
  startDeletePrescription,
  startGetHistorialPrescriptions,
} from "store/recipes/thunks";
import { Modal } from "@mui/material";

const Historial: NextPage = () => {
  const { prescriptions, activePrescription } = useAppSelector(
    (state) => state.historial
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGetHistorialPrescriptions());
  }, [dispatch]);

  const tableElements: ITable = {
    headers: [
      { id: "folio", label: "Folio" },
      { id: "id", label: "ID" },
      { id: "patient_name", label: "Nombre del paciente" },
      { id: "status", label: "Estatus" },
      { id: "actions", label: "Acciones" },
    ],
    keyName: "id",
    rows: prescriptions,
    percentages: [5, 25, 40, 20, 10],
    elements: ["TEXT", "TEXT", "TEXT", "TEXT", "ACTIONS-P-E-D"],
    textDisplay: ["center", "center", "center", "center", "center"],
    onClick: (id: string) => {
      // Edit prescription

      dispatch(setActivePrescriptionHistory(id));
      console.log(id);
    },
    onClick2: (id: string) => {
      dispatch(startDeletePrescription(id));
    },
  };

  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title="Historial de recetas" />
      <div className={styles.content}>
        <Sidebar />
        <Table {...tableElements} />

        {activePrescription && (
          <Modal
            open={activePrescription !== null}
            onClose={() => dispatch(setActivePrescriptionHistory(null))}
          >
            <div className="modalContainer">asdfasdf</div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Historial;
