import cecanApi from "api/cecanApi";
import { IRequestStoreHouseResponse } from "interfaces/IRequestStore.response.interface";
import moment from "moment";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import { setInventory, setRequests } from "./requests.slice";
import "moment/locale/es";
import { IAlmacenListResponse } from "interfaces/IAlmacenListaResponse.response.interface";
import { AppDispatch } from "../store";

export const startGetRequestStorehouse = () => async (dispatch: Dispatch) => {
  const {
    data: { data, ok },
  } = await cecanApi.get<IRequestStoreHouseResponse>("/storehouse/requests");
  moment.locale("es");
  if (ok) {
    dispatch(
      setRequests(
        data.requests.map((item) => ({
          created_at: moment(item.created_at).format("DD MMMM YYYY HH:mm"),
          folio: item.folio,
          name: item.user.name,
          status: item.status.name,
        }))
      )
    );
  } else {
    toast.error("Error al obtener los datos de la farmacia");
    console.log(data);
  }
};

export const startGetStorehouseList = () => async (dispatch: Dispatch) => {
  const {
    data: { data, ok },
  } = await cecanApi.get<IAlmacenListResponse>("/storehouse_inventory");
  if (ok) {
    dispatch(
      setInventory(
        data.inventory.map((item) => ({
          key: item.storehouse_utility.key,
          genericName: item.storehouse_utility.generic_name,
          presentation: item.storehouse_utility.presentation.name,
          quantity_per_unit: item.storehouse_utility.quantity_per_unit,
        }))
      )
    );
  } else {
    toast.error("Error al obtener los datos de la farmacia");
    console.log(data);
  }
};
