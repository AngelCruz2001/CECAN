import React, { useState } from "react";
import {
  IMedicine,
  IMedicineCatalog,
} from "../../interfaces/IMedicineStock.interface";
import { FC, useEffect } from "react";
import { Modal } from "@mui/material";
import { addActiveMedicine } from "store/recipes/recipesSlice";
import { useAppDispatch } from "hooks/hooks";
import { toggleModal } from "store/ui/uiSlice";
import styles from "./Prescription.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

type PickAMedicineProps = {
  medicines: IMedicineCatalog[] | null;
  activeMedicines: IMedicine[] | null;
  isModalOpen: boolean;
};

export const PickAMedicine: FC<PickAMedicineProps> = ({
  isModalOpen,
  activeMedicines,
  medicines,
}) => {
  const dispatch = useAppDispatch();

  const handleToggleModal = () => {
    dispatch(toggleModal());
  };

  const [renderMedicine, setRenderMedicine] = useState(medicines);

  useEffect(() => {
    if (medicines && activeMedicines) {
      setRenderMedicine(
        medicines?.filter((medicine) => {
          const activeMedicine = activeMedicines?.find(
            (activeMedicine) => activeMedicine.key === medicine.key
          );
          return !activeMedicine;
        })
      );
    }
  }, []);

  return (
    <Modal
      open={isModalOpen}
      onClose={handleToggleModal}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.modal}>
        {renderMedicine && renderMedicine.length > 0 ? (
          <h2>Seleccione una medicina a agregar</h2>
        ) : (
          <h2>No hay mas medicinas para agregar</h2>
        )}

        <div className={styles.medicinesContainer}>
          {renderMedicine && renderMedicine.length > 0 ? (
            renderMedicine.map((medicine) => (
              <div
                key={medicine.key}
                className={styles.medicine}
                onClick={() => {
                  dispatch(addActiveMedicine(medicine));
                  handleToggleModal();
                }}
              >
                <p>{medicine.key}</p>
                <p>{medicine.name}</p>
                <FontAwesomeIcon icon={faPlusCircle} />
              </div>
            ))
          ) : (
            <div className={styles.svgContainer}>
              <img className={styles.svg} src="./svg/medicine.svg" />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
