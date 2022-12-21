import { useEffect } from "react";
import { Sidebar, TopBar, TitleScreen, Table } from "components";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { NextPage } from "next";

import styles from "styles/modules/PharmacyCatalog.module.scss";
import { setPharmacyData } from "store/pharmacy/pharmacySlice";
import { dataPharmacy } from "resources/data";
import { startGetPharmacyData } from "../../store/pharmacy/thunks";
import { ITable } from "../../interfaces/ITable.interface";

const PharmacyCatalog: NextPage = (props) => {
  const { pharmacyData } = useAppSelector((state) => state.pharmacy);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startGetPharmacyData());
  }, []);

  const tableInformation: ITable = {
    headers: [
      { id: "lot_number", label: "Lote" },
      { id: "id", label: "ID medicina" },
      { id: "name", label: "Nombre" },
      { id: "expires_at", label: "Expira el" },
      { id: "pieces", label: "Cantidad" },
    ],
    rows: pharmacyData,
    elements: ["TEXT", "TEXT", "TEXT", "TEXT", "TEXT"],
    percentages: [25, 20, 20, 20, 15],
    textDisplay: [
      "center",
      "center",
      "center",
      "center",
      "center",
      "center",
    ] as CanvasTextAlign[],
    onClick: (id: string) => {
      console.log(id);
    },
  };

  return (
    <div className={styles.container}>
      <TopBar />
      <TitleScreen title="Catálogo Farmacía" />
      <div className={styles.content}>
        <Sidebar />
        <Table {...tableInformation} />
      </div>
    </div>
  );
};

export default PharmacyCatalog;
