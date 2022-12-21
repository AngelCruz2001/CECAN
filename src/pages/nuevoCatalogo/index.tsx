import { NextPage } from "next";
import { BaseStructure, Input } from "components";
import { Formik, Field } from "formik";
import styles from "styles/modules/AddMedicine.module.scss";
import * as Yup from "yup";
import { SubmitButton } from "../../components/forms/SubmitButton";
import { useAppDispatch } from "hooks/hooks";
import { startAddAMedicine } from "store/pharmacy/thunks";

const AddInventory: NextPage = () => {
  const dispatch = useAppDispatch();
  return (
    <BaseStructure pageName="Añadir medicamento ">
      <Formik
        initialValues={{
          key: "",
          name: "",
        }}
        validationSchema={Yup.object({
          key: Yup.string()
            .required("Campo requerido")
            .min(9, "Mínimo 9 caracteres")
            .max(9, "Máximo 9 caracteres"),
          name: Yup.string().required("Campo requerido"),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(
            startAddAMedicine(
              {
                ...values,
              },
              resetForm
            )
          );
        }}
      >
        {(formik) => (
          <>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <Input name="key" placeholder="Clave del medicamento" type="text" />
              <Input name="name" placeholder="Nombre del medicamento" type="text" />

              <SubmitButton text="Agregar" />
            </form>
          </>
        )}
      </Formik>
    </BaseStructure>
  );
};

export default AddInventory;
