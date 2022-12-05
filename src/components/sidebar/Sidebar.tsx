import React, { FC } from "react";
import styles from "./Sidebar.module.scss";
import { SidebarItem } from "./SidebarItem";
import {
  faBoxesStacked,
  faClipboardCheck,
  faFilePrescription,
  faLaptopMedical,
  faPrescriptionBottleMedical,
  faShop,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";

type Props = {};

export const Sidebar: FC<Props> = () => {
  const items = [
    {
      icon: faPrescriptionBottleMedical,
      text: "Cátalogo",
      path: "catalogoFarmacia",
    },
    {
      icon: faSquarePlus,
      text: "Añadir medicamento",
      path: "",
    },
    {
      icon: faFilePrescription,
      text: "Generar receta",
      path: "generarReceta",
    },
    {
      icon: faClipboardCheck,
      text: "Historial de recetas",
      path: "historial",
    },
    {
      icon: faShop,
      text: "Solicitudes",
      path: "almacen",
    },
    {
      icon: faBoxesStacked,
      text: "Lista de almacen",
      path: "listaAlmacen",
    },
    {
      icon: faLaptopMedical,
      text: "Activo fijo",
      path: "activoFijo",
    },
  ];

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <SidebarItem
          key={item.text}
          icon={item.icon}
          text={item.text}
          path={item.path}
        />
      ))}
    </div>
  );
};
