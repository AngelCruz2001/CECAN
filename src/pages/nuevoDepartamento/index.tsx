import React, { useEffect } from "react";
import { BaseStructure, Input, SubmitButton } from "components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import {
  startAddingFixedAsset,
  startGetDepartments,
  startSetDepartments,
} from "store/fixedAsset/thunks";

const AddDepartament = () => {
  const dispatch = useAppDispatch();
  const { departments } = useAppSelector((state) => state.fixedAsset);

  useEffect(() => {
    dispatch(startGetDepartments());
  }, []);

  return (
    <BaseStructure pageName="Añadir nuevo stock">
      <Formik
        initialValues={{
          name: "",
          floor_number: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("El nombre es requerido"),
          floor_number: Yup.number(),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log("caca");
          dispatch(startSetDepartments(values));
        }}
      >
        {(formik) => (
          <>
            <form onSubmit={formik.handleSubmit}>
              <Input name="name" placeholder="Nombre" type="text" />

              <Input
                name="floor_number"
                placeholder="Número de piso"
                type="text"
              />

              <SubmitButton text="Añadir nuevo departamento" />
            </form>
          </>
        )}
      </Formik>
    </BaseStructure>
  );
};

export default AddDepartament;
