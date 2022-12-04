import {
  Sidebar,
  TopBar,
  TitleScreen,
  GeneratePrescription,
  SelectMedicines,
} from "components";
import { NextPage } from "next";
import { dataPharmacy } from "resources/data";

import styles from "styles/modules/GenerateRecipe.module.scss";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { useEffect } from "react";
import { setMedicines } from "store/recipes/recipesSlice";

const GenerateRecipe: NextPage = () => {
  const { activeMedicines, medicines } = useAppSelector(
    (state) => state.recipes
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setMedicines(dataPharmacy.medicines));
  }, []);

  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title="Generar Receta" />
      <div className={styles.content}>
        <Sidebar />
        <div className={styles.generate}>
          <GeneratePrescription activeMedicines={activeMedicines} />
          <SelectMedicines medicines={medicines} />
        </div>
      </div>
    </div>
  );
};
export default GenerateRecipe;
