import { Input, SubmitButton } from "components";
import { Formik } from "formik";
import * as Yup from "yup";
import { startAddingFixedAsset } from "store/fixedAsset/thunks";
import { useAppDispatch } from "hooks/hooks";

export const FormActivoFijo = ({ departments, data, setData }) => {
  const dispatch = useAppDispatch();

  return (
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
        key: Yup.string()
          .required("Campo requerido")
          .notOneOf(
            data?.map((item) => item.key),
            "Esta clave ya esta registrada"
          ),
        description: Yup.string().required("Campo requerido"),
        brand: Yup.string().required("Campo requerido"),
        model: Yup.string().required("Campo requerido"),
        series: Yup.string().required("Campo requerido"),
        type: Yup.string().required("Campo requerido"),
        physical_state: Yup.string().required("Campo requerido"),
        department_id: Yup.string()
          .required("Campo requerido")
          .oneOf(
            data.length > 0 && data[0].department_id
              ? [data[0].department_id]
              : departments?.map((department) => department.id),
            "Los activos fijos deben pertenecer al mismo departamento"
          ),
        observation: Yup.string().required("Campo requerido"),
      })}
      onSubmit={(values, { resetForm }) => {
        // dispatch(startAddingFixedAsset(values, resetForm));
        resetForm();
        setData((prev) => [...prev, values]);
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
            <Input name="observation" placeholder="Observación" type="text" />

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
  );
};
