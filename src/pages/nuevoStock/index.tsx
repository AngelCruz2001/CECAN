import React from "react";
import { BaseStructure, Input, SubmitButton } from "components";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "styles/modules/AddStock.module.scss";
import { useAppDispatch } from "hooks/hooks";
import { startAddStock } from "../../store/pharmacy/thunks";
const AddStock = () => {
  const dispatch = useAppDispatch();
  return (
    <BaseStructure pageName="Añadir nuevo stock">
      <Formik
        initialValues={{
          lot_number: "",
          pieces: "",
          expires_at: "",
          key: "",
        }}
        validationSchema={Yup.object({
          key: Yup.string()
            .required("Campo requerido")
            .min(9, "Mínimo 9 caracteres"),
          lot_number: Yup.string().required("Campo requerido"),
          eventStartDate: Yup.date().default(() => new Date()),
          pieces: Yup.string().required("Campo requerido"),
          expires_at: Yup.date().when(
            "eventStartDate",
            (eventStartDate, schema) =>
              eventStartDate &&
              schema.min(eventStartDate, "La fecha debe ser mayor a la actual")
          ),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(startAddStock({ ...values }, resetForm));
        }}
      >
        {(formik) => (
          <>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <Input
                name="key"
                placeholder="Clave de la medicina"
                type="text"
              />
              <Input name="pieces" placeholder="¿Cuantas piezas?" type="text" />
              <Input
                name="lot_number"
                placeholder="Número de lote"
                type="text"
              />
              <Input
                name="expires_at"
                placeholder="Fecha de expiración"
                type="date"
              />
              <SubmitButton text="Añadir stock" />
            </form>
          </>
        )}
      </Formik>
    </BaseStructure>
  );
};

export default AddStock;
