import React from "react";
import { BaseStructure, Input, SubmitButton } from "components";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "styles/modules/AddStock.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { startAddStock } from "../../store/pharmacy/thunks";
import { useEffect } from "react";
import { startGetRoles } from "store/users/thunks";
import { startSignUp } from "../../store/auth/thunks";
const nuevoUsuario = () => {
  const dispatch = useAppDispatch();
  const { roles } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(startGetRoles());
  }, []);

  return (
    <BaseStructure pageName="Añadir nuevo usuario">
      <Formik
        initialValues={{
          role_id: "",
          name: "",
          surname: "",
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          role_id: Yup.string().required("Campo requerido"),
          name: Yup.string().required("Campo requerido"),
          surname: Yup.string().required("Campo requerido"),
          email: Yup.string().required("Campo requerido"),
          password: Yup.string().required("Campo requerido"),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(startSignUp(values));
        }}
      >
        {(formik) => (
          <>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
              <Input
                name="role_id"
                placeholder="Rol"
                type="select"
                options={
                  roles
                    ? roles.map((role) => ({
                        value: role.id,
                        label: role.name,
                      }))
                    : []
                }
              />

              <Input name="name" placeholder="Nombre" type="text" />
              <Input name="surname" placeholder="Apellido" type="text" />
              <Input name="email" placeholder="Correo" type="text" />
              <Input name="password" placeholder="Contraseña" type="password" />

              <SubmitButton text="Añadir usuario" />
            </form>
          </>
        )}
      </Formik>
    </BaseStructure>
  );
};

export default nuevoUsuario;
