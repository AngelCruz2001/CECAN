import React, { useEffect } from "react";
import { NextPage } from "next";
import styles from "styles/modules/GenerateRecipe.module.scss";
import { TopBar, TitleScreen, Sidebar, Table } from "components";
import { ITable } from "interfaces/ITable.interface";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { startGetRequestStorehouse } from "../../store/requests/thunks";
const Almacen: NextPage = () => {
  const { requests } = useAppSelector((state) => state.storehouse);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGetRequestStorehouse());
  }, []);

  const tableElements: ITable = {
    headers: [
      { id: "folio", label: "Folio" },
      { id: "created_at", label: "Fecha de solicitud" },
      { id: "name", label: "Nombre del solicitante" },
      { id: "status", label: "Estatus" },
    ],
    rows: requests,
    keyName: "folio",
    percentages: [10, 35, 35, 20],
    textDisplay: ["center", "center", "center", "center", "center"],
    elements: ["TEXT", "TEXT", "TEXT", "TEXT", "DETAILS"],
    onClick: (id: number) => {
      console.log(id);
    },
  };

  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title="Solicitudes" />
      <div className={styles.content}>
        <Sidebar />
        <Table {...tableElements} />
      </div>
    </div>
  );
};

export default Almacen;
