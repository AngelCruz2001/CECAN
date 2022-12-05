import cecanApi from "api/cecanApi";
import { Dispatch } from "redux";
import { IPrescription } from "../../interfaces/IPrescription.interface";
import download from "downloadjs";
import { setMedicines } from "./recipesSlice";
import { IMedicinesResponse } from "../../interfaces/IMedicinesResponse.response.interface";
import { toast } from "react-hot-toast";
import { IPrescriptionResponse } from "../../interfaces/IPrescriptionsResponse.response.interface";
import {
  deletePrescription,
  setPrescriptionHistory,
} from "store/historial/historialSlice";

export const startGenerateRecipe =
  ({ patient_name, instructions, observations, medicines }: IPrescription) =>
  async (dispatch: Dispatch) => {
    console.log("caca");

    const response = await cecanApi.post("/prescriptions", {
      patient_name,
      observations,
      instructions,
      medicines: medicines.map(({ key, quantity }) => ({
        medicine_key: key,
        pieces: quantity,
      })),
    });

    if (response.status === 200) {
      const { data } = response;
      download(
        new Blob([data], { type: "application/pdf" }),
        "recipe.pdf",
        "application/pdf"
      );
    }
  };

export const startGetMedicines = () => async (dispatch: Dispatch) => {
  const {
    data: { data, ok },
  } = await cecanApi.get<IMedicinesResponse>("/medicines");

  if (ok) {
    dispatch(setMedicines(data.medicines));
  } else {
    toast.error("Error al obtener los medicamentos, intente de nuevo");
  }
};

export const startGetHistorialPrescriptions =
  () => async (dispatch: Dispatch) => {
    const {
      data: { data, ok },
    } = await cecanApi.get<IPrescriptionResponse>("/prescriptions");

    if (ok) {
      dispatch(
        setPrescriptionHistory(
          data.prescriptions.map((prescription) => ({
            folio: prescription.folio,
            id: prescription.id,
            patient_name: prescription.patient_name,
            observations: prescription.observations,
            instructions: prescription.instructions,
            status: prescription.prescription_status.name,
          }))
        )
      );
    } else {
      toast.error("Error al obtener los medicamentos, intente de nuevo");
    }
  };

export const startDeletePrescription =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      const data = await cecanApi.delete(`/prescriptions/${id}`);

      if (data.status === 204) {
        dispatch(deletePrescription(id));
        toast.success("Receta eliminada correctamente");
      } else {
        toast.error("Error al eliminar la receta, intente de nuevo");
      }
    } catch (error) {
      toast.error("Error general, hable con el administrador");
    }
  };
