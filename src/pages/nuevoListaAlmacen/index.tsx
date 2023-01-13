import React, { useEffect } from "react";
import { BaseStructure, Input, SubmitButton } from "components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import {
  startAddStorehouseUtility,
  startGetCategoriesStorehouse,
  startGetPresentationsStorehouse,
  startGetUnitsStorehouse,
} from "../../store/requests/thunks";

const AddStorehouseInventory = () => {
  const dispatch = useAppDispatch();
  const { categories, units, presentations } = useAppSelector(
    (state) => state.storehouse
  );

  console.log(categories, units, presentations);
  useEffect(() => {
    dispatch(startGetUnitsStorehouse());
    dispatch(startGetCategoriesStorehouse());
    dispatch(startGetPresentationsStorehouse());
  }, []);
  67;
  return (
    <BaseStructure pageName="Añadir nueva utilidad">
      <Formik
        initialValues={{
          key: "",
          generic_name: "",
          unit_id: "",
          presentation_id: "",
          category_id: "",
          quantity_per_unit: 0,
          description: "",
        }}
        validationSchema={Yup.object({
          key: Yup.string().required("El folio es requerido"),
          generic_name: Yup.string().required(
            "El nombre generico es requerido"
          ),
          unit_id: Yup.string().required("La unidad es requerida"),
          presentation_id: Yup.string().required(
            "La presentación es requerida"
          ),
          category_id: Yup.string().required("La categoria es requerida"),
          quantity_per_unit: Yup.number()
            .required("La cantidad por unidad es requerida")
            .typeError("La cantidad por unidad debe ser un número")
            .positive("La cantidad por unidad debe ser positiva"),
          description: Yup.string().required("La descripción es requerida"),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(startAddStorehouseUtility(values, resetForm));
        }}
      >
        {(formik) => (
          <>
            {units && categories && presentations && (
              <form onSubmit={formik.handleSubmit}>
                <Input name="key" type="text" placeholder="Folio" />
                <Input
                  name="generic_name"
                  type="text"
                  placeholder="Nombre generico"
                />

                <Input
                  name="unit_id"
                  type="select"
                  placeholder="Unidad"
                  options={units.map((unit) => ({
                    value: unit.id,
                    label: unit.name,
                  }))}
                />
                <Input
                  name="presentation_id"
                  type="select"
                  placeholder="Presentación"
                  options={presentations.map((presentation) => ({
                    value: presentation.id,
                    label: presentation.name,
                  }))}
                />
                <Input
                  name="category_id"
                  type="select"
                  placeholder="Categoria"
                  options={categories.map((category) => ({
                    value: category.id,
                    label: category.name,
                  }))}
                />
                <Input
                  name="quantity_per_unit"
                  type="text"
                  placeholder="Cantidad por unidad"
                />
                <Input
                  name="description"
                  type="text"
                  placeholder="Descripción"
                />

                <SubmitButton text="Añadir utilidad" />
              </form>
            )}
          </>
        )}
      </Formik>
    </BaseStructure>
  );
};

export default AddStorehouseInventory;
