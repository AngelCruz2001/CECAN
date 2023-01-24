import cecanApi from "api/cecanApi";
import { toast } from "react-hot-toast";
import { Dispatch } from "redux";
import {
  IDepartments,
  IDepartment,
} from "../../interfaces/IDepartments.interface";
import {
  addDepartment,
  deleteRequestFixedAsset,
  setActiveFixedRequest,
  setDepartments,
  setFixedAssets,
  setFixedAssetsRequests,
} from "./fixedAssetSlice";
import {
  IFixedAsset,
  IFixedAssetRequestResponse,
  IFixedAssetResponse,
  IRequestIDResponse,
} from "../../interfaces/IFixedAssest.interface";
import moment from "moment";
import download from "downloadjs";

export const startGetDepartments = () => async (dispatch: Dispatch) => {
  const response = await cecanApi.get<IDepartments>("/departments?limit=100");
  const departments = response.data.data.departments;
  const departmentsDateFixed = departments.map((department) => {
    department.created_at = moment(department.created_at).format("DD/MM/YYYY");
    department.updated_at = moment(department.updated_at).format("DD/MM/YYYY");
    return department;
  });
  dispatch(setDepartments(departmentsDateFixed));
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
            resposible_user_id: null,
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
  (dataFixedAssets: any) => async (dispatch: Dispatch) => {
    toast.promise(
      cecanApi.post(
        `/fixed_assets_requests/departments/${dataFixedAssets[0].department_id}`,
        {
          fixed_assets: dataFixedAssets?.map((fixedAsset) => ({
            details: fixedAsset,
          })),
        }
      ),
      {
        loading: "Agregando activo fijo",
        success: () => {
          return "Activo fijo agregado";
        },
        error: (error) => {
          console.log(error);
          return "Error al agregar activo fijo";
        },
      }
    );
  };

export const startGetRequestFixedAssets = () => async (dispatch: Dispatch) => {
  const response = await cecanApi.get<IFixedAssetRequestResponse>(
    "/fixed_assets_requests"
  );
  const fixedAssets = response.data.data.fixed_assets_requests;
  dispatch(setFixedAssetsRequests(fixedAssets));
};

export const startDeleteRequestFixedAsset =
  (id: string) => async (dispatch: Dispatch) => {
    toast.promise(cecanApi.delete(`/fixed_assets_requests/${id}`), {
      loading: "Eliminando solicitud",
      success: () => {
        dispatch(deleteRequestFixedAsset(id));
        return "Solicitud eliminada";
      },
      error: "Error al eliminar solicitud",
    });
  };

export const startGetFixedAssetsRequestById =
  (id: string) => async (dispatch: Dispatch) => {
    toast.promise(
      cecanApi.get<IRequestIDResponse>(`/fixed_assets_requests/${id}`),
      {
        loading: "Cargando solicitud",
        success: (request) => {
          dispatch(
            setActiveFixedRequest(request.data.data.fixed_assets_request)
          );
          return "Solicitud cargada";
        },
        error: "Error al cargar solicitud",
      }
    );
  };

export const assignResponsibleDepartmentUser =
  (departmentId: string, userId: string) => async (dispatch: Dispatch) => {
    toast.promise(
      cecanApi.put(`/departments/${departmentId}/users/${userId}`),
      {
        loading: "Asignando responsable",
        success: () => {
          return "Responsable asignado";
        },
        error: "Error al asignar responsable",
      }
    );
  };

export const startPrintingFixedReport =
  (id: string) => async (dispatch: Dispatch) => {
    console.log("caca");
    const res = await fetch(
      `https://staging-app.site/api/v1/fixed_assets_requests/${id}/?pdf=true`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    );

    const blob = await res.blob();

    download(blob, "Reporte Activo Fijo.pdf", "application/pdf");
  };
