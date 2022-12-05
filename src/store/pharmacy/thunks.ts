import cecanApi from "api/cecanApi";
import { IPharmacyDataResponse } from "interfaces/IPharmacy.response.interface";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import { setPharmacyData } from "./pharmacySlice";

export const startGetPharmacyData = () => async (dispatch: Dispatch) => {
  const {
    data: { data, ok },
  } = await cecanApi.get<IPharmacyDataResponse>("/pharmacy_inventory");

  if (ok) {
    dispatch(
      setPharmacyData(
        data.inventory.map((item) => ({
          key: item.medicine.key,
          lot_number: item.stocks[0].lot_number,
          name: item.medicine.name,
          expires_at: item.stocks[0].expires_at,
          pieces: item.stocks[0].pieces,
        }))
      )
    );
  } else {
    toast.error("Error al obtener los datos de la farmacia");
    console.log(data);
  }
};
