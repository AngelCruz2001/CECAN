import cecanApi from "api/cecanApi";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import {
  IDepartments,
  IDepartment,
} from "../../interfaces/IDepartments.interface";
import {
  addDepartment,
  setDepartments,
  setFixedAssets,
} from "./fixedAssetSlice";
import {
  IFixedAsset,
  IFixedAssetResponse,
} from "../../interfaces/IFixedAssest.interface";
import moment from "moment";

export const startGetDepartments = () => async (dispatch: Dispatch) => {
  const response = await cecanApi.get<IDepartments>("/departments?limit=100");
  const departments = response.data.data.departments;
  dispatch(setDepartments(departments));
};

export const startSetDepartments =
  (departments) => async (dispatch: Dispatch) => {
    toast.promise(cecanApi.post<IDepartment>("/departments", departments), {
      loading: "Agregando departamento",
      success: ({ data }) => {
        const { id, name, created_at, updated_at, deleted_at, floor_number } =
          data.data.department;
        dispatch(
          addDepartment({
            id,
            name,
            created_at,
            updated_at,
            deleted_at,
            floor_number,
          })
        );
        return "Departamento agregado";
      },
      error: (error) => {
        console.error(error);
        return "Error al agregar departamento";
      },
    });

    // dispatch(setDepartments(response.data));
  };

export const startGetFixedAssests = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await cecanApi.get<IFixedAssetResponse>("/fixed_assets");
    console.log(data.data.fixed_assets);

    const dataFixedAssets = data.data.fixed_assets.map((fixedAsset) => ({
      ...fixedAsset,
      created_at: moment(fixedAsset.created_at).format("DD/MM/YYYY"),
    }));

    dispatch(setFixedAssets(dataFixedAssets));
  } catch (error) {}
};

export const startAddingFixedAsset =
  (fixedAsset: any) => async (dispatch: Dispatch) => {
    console.log(fixedAsset);
    console.log(fixedAsset.department_id);
    toast.promise(
      cecanApi.post(
        `/fixed_assets_requests/departments/${fixedAsset.department_id}`,
        {
          fixed_assets: [
            {
              details: fixedAsset,
            },
          ],
        }
      ),
      {
        loading: "Agregando activo fijo",
        success: "Activo fijo agregado",
        error: "Error al agregar activo fijo",
      }
    );
  };
