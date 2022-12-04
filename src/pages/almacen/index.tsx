import React from "react";
import { NextPage } from "next";
import styles from "styles/modules/GenerateRecipe.module.scss";
import { TopBar, TitleScreen, Sidebar, Table } from "components";
import { ITable } from "interfaces/ITable.interface";
import { useAppSelector } from "../../hooks/hooks";
const Almacen: NextPage = () => {
  const { requests } = useAppSelector((state) => state.storehouse);

  const tableElements: ITable = {
    headers: [
      { id: "folio", label: "Folio" },
      { id: "created_at", label: "Fecha de solicitud" },
      { id: "name", label: "Nombre del solicitante" },
      { id: "status", label: "Estatus" },
      { id: "details", label: "Detalles" },
    ],
    rows: requests,
    percentages: [10, 30, 30, 15, 15],
    textDisplay: ["center", "center", "center", "center", "center"],
    elements: ["TEXT", "TEXT", "TEXT", "TEXT", "DETAILS"],
    onClick: (id: number) => {
      console.log(id);
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

export default Almacen;
