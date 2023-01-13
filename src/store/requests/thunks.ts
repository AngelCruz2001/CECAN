import cecanApi from "api/cecanApi";
import { IRequestStoreHouseResponse } from "interfaces/IRequestStore.response.interface";
import moment from "moment";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import {
  setCategories,
  setInventory,
  setPresentations,
  setRequests,
  setUnits,
} from "./requests.slice";
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

export const startGetUnitsStorehouse = () => async (dispatch: AppDispatch) => {
  try {
    const {
      data: { data, ok },
    } = await cecanApi.get("/storehouse_utilities/units");
    if (ok) {
      dispatch(setUnits(data.storehouse_utility_units));
    }
  } catch (error) {}
};

export const startGetCategoriesStorehouse =
  () => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { data, ok },
      } = await cecanApi.get("/storehouse_utilities/categories");
      if (ok) {
        dispatch(setCategories(data.storehouse_utility_categories));
      }
    } catch (error) {}
  };

export const startGetPresentationsStorehouse =
  () => async (dispatch: AppDispatch) => {
    try {
      const {
        data: { data, ok },
      } = await cecanApi.get("/storehouse_utilities/presentations");
      if (ok) {
        dispatch(setPresentations(data.storehouse_utility_presentations));
      }
    } catch (error) {}
  };

export const startAddStorehouseUtility =
  (values: any, resetForm: () => void) => async (dispatch: AppDispatch) => {
    try {
      toast.promise(cecanApi.post("/storehouse_utilities", values), {
        loading: "Guardando...",
        success: (data) => {
          resetForm();
          return "Guardado correctamente";
        },
        error: (error) => {
          console.log(error);
          return "Error al guardar";
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

export const startAddStockStorehouse =
  (values: any, resetForm: () => void) => async (dispatch: AppDispatch) => {
    toast.promise(
      cecanApi.post(
        `/storehouse_utilities/${values.key}/storehouse_inventory`,
        {
          ...values,
          expires_at: moment(values.expires_at).format(
            "YYYY-MM-DD[T]HH:mm:ssZ"
          ),
        }
      ),
      {
        loading: "Guardando...",
        success: (data) => {
          resetForm();
          return "Stock añadido correctamente";
        },
        error: (error) => {
          console.log(error);
          return "Error al guardar";
        },
      }
    );
  };
