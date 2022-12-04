import React from "react";
import { NextPage } from "next";
import styles from "styles/modules/GenerateRecipe.module.scss";
import { Sidebar, Table, TitleScreen, TopBar } from "components";

const ListAlmacen: NextPage = () => {

    // const tableElements = {
    //     headers: [
            



  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title="Historial de recetas" />
      <div className={styles.content}>
        <Sidebar />
        {/* <Table {...tableElements} /> */}
      </div>
    </div>
  );
};

export default ListAlmacen;
