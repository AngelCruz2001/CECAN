import React, { useEffect } from "react";
import { NextPage } from "next";
import styles from "styles/modules/GenerateRecipe.module.scss";
import { Sidebar, Table, TitleScreen, TopBar } from "components";
import { ITable } from '../../interfaces/ITable.interface';
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { startGetStorehouseList } from "../../store/requests/thunks";
import { startGetUsers } from "store/users/thunks";

const Users: NextPage = () => {
  const { users } = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGetUsers());
  }, []);

  const tableElements: ITable = {
    headers: [
      { id: "id", label: "ID" },
      { id: "email", label: "Correo electrónico" },
      { id: "full_name", label: "Nombre" },
    ],
    rows: users as ITable["rows"],
    percentages: [25, 45, 30],
    textDisplay: ["center", "center", "center"],
    elements: ["text", "text", "text", "text"],
    keyName: "key",
  };

  useEffect(() => {
    dispatch(startGetStorehouseList());
  }, []);

  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title="Usuarios" />
      <div className={styles.content}>
        <Sidebar />
        <Table {...tableElements} />
      </div>
    </div>
  );
};

export default Users;
