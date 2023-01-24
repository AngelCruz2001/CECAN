import { Sidebar, Table, TitleScreen, TopBar } from "components";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import React, { useEffect } from "react";
import { ITable } from "../../interfaces/ITable.interface";
import styles from "styles/modules/GenerateRecipe.module.scss";
import { startGetFixedAssests } from "store/fixedAsset/thunks";

const FixedAsset = () => {
  const { fixedAssets } = useAppSelector((state) => state.fixedAsset);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGetFixedAssests());
  }, []);

  const tableElements: ITable = {
    headers: [
      { id: "key", label: "Etiqueta o clave" },
      { id: "description", label: "Descripción" },
      { id: "model", label: "Modelo" },
      { id: "brand", label: "Marca" },
      { id: "created_at", label: "Fecha de adquisición" },
    ],
    rows: fixedAssets,
    keyName: "folio",
    percentages: [30, 20, 10, 15, 15],
    textDisplay: ["center", "center", "center", "center", "center"],
    elements: ["TEXT", "TEXT", "TEXT", "TEXT", "TEXT"],
    onClick: (id: number) => {
      console.log(id);
    },
  };

  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title="Activo fijo" />
      <div className={styles.content}>
        <Sidebar />
        <Table {...tableElements} />
      </div>
    </div>
  );
};

export default FixedAsset;
