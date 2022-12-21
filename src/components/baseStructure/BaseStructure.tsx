import React, { FC } from "react";
import { TopBar } from "../topBar/Topbar";
import { Sidebar } from "../sidebar/Sidebar";
import { TitleScreen } from "components/titleScreen";
import styles from "./BaseStructure.module.scss";
interface Props {
  pageName: string;
  children: React.ReactNode;
}

export const BaseStructure: FC<Props> = ({ pageName, children }) => {
  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title={pageName} />
      <div className={styles.content}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};
