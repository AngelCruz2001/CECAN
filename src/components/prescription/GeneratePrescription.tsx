import { FC, useEffect, useState } from "react";
import { IMedicine } from "../../interfaces/IMedicineStock.interface";
import { ITable } from "../../interfaces/ITable.interface";
import {
  modifyActiveMedicinesQuantity,
  removeActiveMedicine,
  setActiveIndication,
} from "store/recipes/recipesSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { AddMedicineButton, Table } from "components";

import styles from "./Prescription.module.scss";
import { PickAMedicine } from "./PickAMedicine";
import { toggleModal } from "store/ui/uiSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { startGenerateRecipe } from "store/recipes/thunks";
import { startGetMedicines } from "../../store/recipes/thunks";
export const GeneratePrescription: FC = () => {
  const dispatch = useAppDispatch();

  const {
    recipes: { activeMedicines, medicines, activeIndication },
    ui: { isModalOpen },
  } = useAppSelector((state) => state);

  const tableElements: ITable = {
    headers: [
      { id: "key", label: "Clave" },
      { id: "name", label: "Nombre" },
      { id: "quantity", label: "Cantidad" },
      { id: "remove", label: "" },
    ],
    rows: activeMedicines,
    percentages: [10, 30, 30, 20],
    textDisplay: ["center", "center", "center", "center"] as CanvasTextAlign[],
    elements: ["TEXT", "TEXT", "COUNTER", "REMOVE"],
    onClick: (key: string, quantity: number) => {
      dispatch(modifyActiveMedicinesQuantity({ key, quantity }));
    },
    onClick2: (key: string) => {
      dispatch(removeActiveMedicine(key));
    },
  };

  const openModal = () => dispatch(toggleModal());

  useEffect(() => {
    dispatch(startGetMedicines());
  }, []);

  const formik = useFormik({
    initialValues: {
      patientName: "",
      indications: activeIndication,
    },
    validationSchema: Yup.object({
      patientName: Yup.string().required("El nombre del paciente es requerido"),
      indications: Yup.string().required("Las indicaciones son requeridas"),
    }),
    onSubmit: (values) => {
      dispatch(
        startGenerateRecipe({
          instructions: values.indications!,
          medicines: activeMedicines!,
          observations: "",
          patient_name: values.patientName,
        })
      );
    },
  });

  return (
    <>
      <Table {...tableElements} />

      <AddMedicineButton showModal={openModal} />

      {isModalOpen && (
        <PickAMedicine
          isModalOpen={isModalOpen}
          activeMedicines={activeMedicines}
          medicines={medicines}
        />
      )}

      <form onSubmit={formik.handleSubmit} className={styles.indications}>
        <input
          className={styles.patientName}
          type="text"
          placeholder="Nombre del paciente"
          name="patientName"
          onChange={formik.handleChange}
          value={formik.values.patientName}
        />
        <textarea
          className={styles.textArea}
          placeholder="Indicaciones"
          name="indications"
          cols={30}
          rows={10}
          onChange={formik.handleChange}
          value={formik.values.indications!}
        />
        <button type="submit">Generar Receta</button>
      </form>
    </>
  );
};
