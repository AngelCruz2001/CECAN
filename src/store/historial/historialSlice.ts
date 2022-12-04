import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IHistorial,
  IPrescriptionHistory,
} from "interfaces/IHistorial.interface";
import { ITable } from "interfaces/ITable.interface";
import { dataPharmacy } from "../../resources/data";
export interface IHistorialState extends IHistorial {
  activePrescription: IPrescriptionHistory | null;
  loading: boolean;
}

const initialState: IHistorialState = {
  loading: false,
  prescriptions: dataPharmacy.historialPrescriptions,
  activePrescription: null,
};

export const historialSlice = createSlice({
  name: "historial",
  initialState,
  reducers: {
    setPrescriptionHistory: (
      state,
      action: PayloadAction<IPrescriptionHistory[]>
    ) => {
      state.prescriptions = action.payload;
    },
    setActivePrescriptionHistory: (state, action: PayloadAction<number>) => {
      state.activePrescription = state.prescriptions!.find(
        (prescription) => prescription.folio === action.payload
      )!;
    },
    deletePrescription: (state, action: PayloadAction<number>) => {
      state.prescriptions = state.prescriptions!.filter(
        (prescription) => prescription.folio !== action.payload
      );
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setPrescriptionHistory,
  deletePrescription,
  setActivePrescriptionHistory,
} = historialSlice.actions;
