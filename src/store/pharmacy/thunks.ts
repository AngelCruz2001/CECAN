import cecanApi from "api/cecanApi";
import {
  IPharmacyDataResponse,
  Stock,
} from "interfaces/IPharmacy.response.interface";
import { IAddMedicineResponse } from "interfaces/responses/IAddMedicine.response.interface";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import { setPharmacyData } from "./pharmacySlice";
import { checkAuthorization } from "../../helpers/checkAuthorization";
import { IMedicineStock } from "../../interfaces/IMedicineStock.interface";
import { IInventory } from "interfaces/IInventoryPharmacy.interface";
import moment from "moment";

export const startGetPharmacyData = () => async (dispatch: Dispatch) => {
  try {
    const {
      data: { data, ok },
    } = await cecanApi.get<IPharmacyDataResponse>("/pharmacy_inventory");
    if (ok) {
      console.log(data.inventory);
      if (data.inventory === null && data.inventory.length > 0) {
        toast.error("No hay inventario disponible");
      } else {
        const dataMedicines = [];

        data.inventory.forEach((medicine: IInventory) => {
          if (medicine.stocks.length > 0) {
            medicine.stocks.map((stock: Stock) => {
              const medicineStock: IMedicineStock = {
                key: stock.id,
                id: medicine.medicine.key,
                name: medicine.medicine.name,
                lot_number: stock.lot_number,
                pieces: stock.pieces_left,
                expires_at: stock.expires_at,
              };
              dataMedicines.push(medicineStock);
            });
          } else {
            const medicineStock: IMedicineStock = {
              key: medicine.medicine.key,
              id: medicine.medicine.key,
              name: medicine.medicine.name,
              lot_number: "No definido",
              pieces: 0,
              expires_at: "No definido",
            };
            dataMedicines.push(medicineStock);
          }
        });

        dispatch(setPharmacyData(dataMedicines));
      }
    } else {
      toast.error("Error al obtener los datos de la farmacia");
      console.log(data);
    }
  } catch (error) {
    checkAuthorization(error.response.status);
    console.log(error);
  }
};

export const startAddAMedicine =
  ({ key, name }, resetForm: Function) =>
  async (dispatch: Dispatch) => {
    try {
      const {
        data: { data, ok },
        status,
      } = await cecanApi.post<IAddMedicineResponse>("/medicines", {
        key,
        name,
      });

      if (status === 201) {
        toast.success("Medicina agregada correctamente");
        resetForm();
      } else {
        toast.error("Error al agregar la medicina");
      }
    } catch (error) {
      checkAuthorization(error.response.status);
      console.log(error);
    }
  };

export const startAddStock =
  ({ key, lot_number, expires_at, pieces }, resetForm: Function) =>
  async (dispatch: Dispatch) => {
    console.log(lot_number);
    try {
      const {
        data: { data, ok },
        status,
      } = await cecanApi.post<IAddMedicineResponse>(
        `/medicines/${key}/pharmacy_inventory`,
        {
          key,
          lot_number,
          expires_at: moment.utc(expires_at),
          pieces: parseInt(pieces),
        }
      );

      if (status === 201) {
        console.log(data);
        toast.success("Medicina agregada correctamente");
        resetForm();
      } else {
        toast.error("Error al agregar la medicina");
      }
    } catch (error) {
      checkAuthorization(error.response.status);
      console.log(error);
    }
  };
