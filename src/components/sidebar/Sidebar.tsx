import React, { FC } from "react";
import styles from "./Sidebar.module.scss";
import { SidebarItem } from "./SidebarItem";
import {
  faPrescriptionBottleMedical,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

type Props = {};

export const Sidebar: FC<Props> = () => {
  const items = [
    {
      icon: faPrescriptionBottleMedical,
      text: "Cátalogo",
      active: false,
      onClick: () => console.log("Cátalogo"),
    },
    {
      icon: faSquarePlus,
      text: "Añadir medicamento",
      active: false,
      onClick: () => console.log("Cátalogo"),
    },
  ];

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <SidebarItem
          key={item.text}
          icon={item.icon}
          text={item.text}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};
