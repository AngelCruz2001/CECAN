import { Field, useField } from "formik";
import { FC } from "react";
import styles from "./Forms.module.scss";
type Props = {
  name: string;
  placeholder: string;
  type: string;
  options?: { value: string; label: any }[];
};
export const Input: FC<Props> = ({ name, placeholder, type, options }) => {
  const [field, meta] = useField(name);

  if (type === "select") {
    return (
      <Field
        name={name}
        as="select"
        className={styles.input}
        placeholder={placeholder}
        {...field}
      >
        <option value="" selected disabled>
          Seleccione una opción
        </option>

        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    );
  }
  return (
    <div className={styles.containerInput}>
      <Field
        className={styles.input}
        name={name}
        type={type}
        placeholder={placeholder}
        {...field}
      />

      {meta.touched && meta.error && (
        <div className={styles.error}>{meta.error}</div>
      )}
    </div>
  );
};
