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
  prescriptions: null,
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
    setActivePrescriptionHistory: (state, action: PayloadAction<string>) => {
      state.activePrescription = state.prescriptions!.find(
        (prescription) => prescription.id === action.payload
      )!;
    },
    deletePrescription: (state, action: PayloadAction<string>) => {
      state.prescriptions = state.prescriptions!.filter(
        (prescription) => prescription.id !== action.payload
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
