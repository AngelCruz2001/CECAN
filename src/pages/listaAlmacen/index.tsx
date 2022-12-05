import React, { useEffect } from "react";
import { NextPage } from "next";
import styles from "styles/modules/GenerateRecipe.module.scss";
import { Sidebar, Table, TitleScreen, TopBar } from "components";
import { ITable } from "../../interfaces/ITable.interface";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { startGetStorehouseList } from "../../store/requests/thunks";
const ListAlmacen: NextPage = () => {
  const { inventory } = useAppSelector((state) => state.storehouse);
  const dispatch = useAppDispatch();
  const tableElements: ITable = {
    headers: [
      { id: "key", label: "Folio" },
      { id: "genericName", label: "Nombre Generico" },
      { id: "presentation", label: "Presentación" },
      { id: "quantity_per_unit", label: "Cantidad" },
    ],
    rows: inventory,
    percentages: [15, 45, 20, 20],
    textDisplay: ["center", "start", "start", "center"],
    elements: ["text", "text", "text", "text"],
    keyName: "key",
  };

  useEffect(() => {
    dispatch(startGetStorehouseList());
  }, []);

  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title="Lista Almacén" />
      <div className={styles.content}>
        <Sidebar />
        <Table {...tableElements} />
      </div>
    </div>
  );
};

export default ListAlmacen;
