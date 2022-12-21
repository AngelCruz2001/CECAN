import React, { useEffect } from "react";
import { BaseStructure, Input, SubmitButton } from "components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import {
  startAddingFixedAsset,
  startGetDepartments,
} from "store/fixedAsset/thunks";

const AddFixedAsset = () => {
  const dispatch = useAppDispatch();
  const { departments } = useAppSelector((state) => state.fixedAsset);

  useEffect(() => {
    dispatch(startGetDepartments());
  }, []);

  return (
    <BaseStructure pageName="Añadir nuevo stock">
      <Formik
        initialValues={{
          key: "",
          description: "",
          brand: "",
          model: "",
          series: "",
          type: "",
          physical_state: "",
          observation: "",
          department_id: "",
        }}
        validationSchema={Yup.object({
          // key: Yup.string().required("Campo requerido"),
          // description: Yup.string().required("Campo requerido"),
          // brand: Yup.string().required("Campo requerido"),
          // model: Yup.string().required("Campo requerido"),
          // series: Yup.string().required("Campo requerido"),
          // type: Yup.string().required("Campo requerido"),
          // physical_state: Yup.string().required("Campo requerido"),
          // department_id: Yup.string().required("Campo requerido"),
          // observation: Yup.string().required("Campo requerido"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log("caca");
          dispatch(startAddingFixedAsset(values));
        }}
      >
        {(formik) => (
          <>
            <form onSubmit={formik.handleSubmit}>
              <Input name="key" placeholder="Clave" type="text" />
              <Input name="description" placeholder="Descripción" type="text" />
              <Input name="brand" placeholder="Marca" type="text" />
              <Input name="model" placeholder="Modelo" type="text" />
              <Input name="series" placeholder="Serie" type="text" />
              <Input name="type" placeholder="Tipo" type="text" />
              <Input
                name="physical_state"
                placeholder="Estado físico"
                type="text"
              />
              <Input
                name="department_id"
                placeholder="Departamento"
                type="select"
                options={
                  departments?.map((department) => ({
                    value: department.id,
                    label: department.name,
                  })) || []
                }
              />

              <SubmitButton text="Añadir activo fijo" />
            </form>
          </>
        )}
      </Formik>
    </BaseStructure>
  );
};

export default AddFixedAsset;
