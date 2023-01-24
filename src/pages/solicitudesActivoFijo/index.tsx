import React, { useEffect } from "react";
import { BaseStructure, Input, SubmitButton } from "components";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import {
  startAddingFixedAsset,
  startDeleteRequestFixedAsset,
  startGetDepartments,
  startGetFixedAssetsRequestById,
  startGetRequestFixedAssets,
  startPrintingFixedReport,
} from "store/fixedAsset/thunks";
import styles from "styles/modules/FixedAsset.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faDeleteLeft,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { clearActiveFixedRequest } from "store/fixedAsset/fixedAssetSlice";
import { Print } from "../../components/print/Print";

const FixedAssetRequests = () => {
  const dispatch = useAppDispatch();
  const { departments, requests, activeRequest } = useAppSelector(
    (state) => state.fixedAsset
  );

  useEffect(() => {
    dispatch(startGetDepartments());
    dispatch(startGetRequestFixedAssets());
    dispatch(clearActiveFixedRequest());
  }, []);

  const onDelete = (id: string) => {
    dispatch(clearActiveFixedRequest());
    dispatch(startDeleteRequestFixedAsset(id));
  };

  const handleActiveRequest = (id: string) => {
    dispatch(startGetFixedAssetsRequestById(id));
  };

  const handlePrint = () => {
    dispatch(startPrintingFixedReport(activeRequest?.id));
  };

  return (
    <BaseStructure pageName="Solicitudes de activo fijo">
      <div className={styles.container}>
        {requests?.map(({ id, department, created_at }) => (
          <div
            className={`${styles.item} ${
              activeRequest?.id === id && styles.active
            }`}
            key={id}
            onClick={() => handleActiveRequest(id)}
          >
            <h2>{department.name}</h2>
            <p>{moment(created_at).format("DD-MM-YYYY")}</p>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faTrash}
              onClick={() => onDelete(id)}
            />
          </div>
        ))}
      </div>

      {activeRequest && (
        <div className={styles.card}>
          <Print id={activeRequest.id} onClick={handlePrint} />

          {activeRequest?.fixed_assets.map(({ id, details }) => (
            <div className={styles.itemCard} key={id}>
              <h2>Clave: </h2>
              <span>{details.key}</span>
              <h2>Descripción: </h2>
              <span>{details.description}</span>
              <h2>Marca: </h2>
              <span>{details.brand}</span>

              <h2>Modelo: </h2>
              <span>{details.model}</span>
            </div>
          ))}
        </div>
      )}
    </BaseStructure>
  );
};

export default FixedAssetRequests;
