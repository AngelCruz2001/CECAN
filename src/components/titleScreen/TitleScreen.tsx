import React, { FC } from "react";
import styles from "./TitleScreen.module.scss";
type Props = {
  title: string;
};

export const TitleScreen: FC<Props> = ({ title }) => {
  return <div className={styles.titleScreen}>{title}</div>;
};
