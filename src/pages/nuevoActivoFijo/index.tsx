import React, { useEffect, useState } from "react";
import { BaseStructure, FormActivoFijo } from "components";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import {
  startAddingFixedAsset,
  startGetDepartments,
} from "store/fixedAsset/thunks";

import styles from "styles/modules/AddFixedAsset.module.scss";

const AddFixedAsset = () => {
  const dispatch = useAppDispatch();
  const { departments } = useAppSelector((state) => state.fixedAsset);

  useEffect(() => {
    dispatch(startGetDepartments());
  }, []);

  const [dataForms, setdataForms] = useState([]);

  const resetData = () => setdataForms([]);

  return (
    <BaseStructure pageName="Añadir nuevo stock">
      <div className={styles.container}>
        <FormActivoFijo
          departments={departments}
          data={dataForms}
          setData={setdataForms}
        />

        {dataForms?.map((dataForm) => (
          <div className={styles.data} key={dataForm.key}>
            <h2>{dataForm.key}</h2>
            <p>{dataForm.description}</p>
          </div>
        ))}

        {dataForms?.length > 0 && (
          <button
            className={styles.button}
            onClick={() => {
              resetData();
              dispatch(startAddingFixedAsset(dataForms));
            }}
          >
            Guardar
          </button>
        )}
      </div>
    </BaseStructure>
  );
};

export default AddFixedAsset;
