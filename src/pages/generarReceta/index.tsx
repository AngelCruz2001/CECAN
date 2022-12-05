import { Sidebar, TopBar, TitleScreen, GeneratePrescription } from "components";
import { NextPage } from "next";
import { dataPharmacy } from "resources/data";

import styles from "styles/modules/GenerateRecipe.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useEffect } from "react";
import { setMedicines } from "store/recipes/recipesSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const GenerateRecipe: NextPage = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <TopBar />
      <div className={styles.container}>
        <TitleScreen title="Generar Receta" />
        <div className={styles.content}>
          <Sidebar />

          <div className={styles.generate}>
            <GeneratePrescription />
            {/* <SelectMedicines medicines={medicines} /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default GenerateRecipe;
