import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IMedicine,
  IMedicineCatalog,
} from "interfaces/IMedicineStock.interface";
import { ITable } from "interfaces/ITable.interface";
export interface IPharmacyState {
  medicines: IMedicineCatalog[] | null;
  activeMedicines: IMedicine[] | null;
  activeIndication: string | null;
  loading: boolean;
}

const initialState: IPharmacyState = {
  medicines: null,
  activeMedicines: [{ key: "1", name: "Paracetamol", quantity: 10 }],
  activeIndication: null,
  loading: false,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setMedicines: (state, action: PayloadAction<IMedicineCatalog[]>) => {
      state.medicines = action.payload;
    },
    setActiveMedicines: (state, action: PayloadAction<IMedicine[]>) => {
      state.activeMedicines = action.payload;
    },
    setActiveIndication: (state, action: PayloadAction<string>) => {
      state.activeIndication = action.payload;
    },
    removeActiveMedicine: (state, action: PayloadAction<string>) => {
      state.activeMedicines = state.activeMedicines!.filter(
        (medicine) => medicine.key !== action.payload
      );
    },

    modifyActiveMedicinesQuantity: (
      state,
      action: PayloadAction<{ key: string; quantity: number }>
    ) => {
      const { key, quantity } = action.payload;
      const medicine = state.activeMedicines?.find(
        (medicine) => medicine.key === key
      );
      if (medicine) {
        medicine.quantity = quantity;
      }
    },
    addActiveMedicine: (state, action: PayloadAction<string>) => {
      const medicine = state.medicines?.find(
        (medicine) => medicine.key === action.payload
      );

      if (medicine) {
        state.activeMedicines?.push({
          key: medicine.key,
          name: medicine.name,
          quantity: 1,
        });
      }
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setMedicines,
  setActiveMedicines,
  setActiveIndication,
  modifyActiveMedicinesQuantity,
  addActiveMedicine,
  removeActiveMedicine, 
} = recipesSlice.actions;
