import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITable } from "interfaces/ITable.interface";
import { dataPharmacy } from "resources/data";
import { IMedicineStock } from "../../interfaces/IMedicineStock.interface";
export interface IPharmacyState {
  loading: boolean;
  pharmacyData: IMedicineStock[] | null;
}

const initialState: IPharmacyState = {
  pharmacyData: dataPharmacy.rows,
  loading: false,
};

export const pharmacySlice = createSlice({
  name: "pharmacy",
  initialState,
  reducers: {
    setPharmacyData: (state, action: PayloadAction<IMedicineStock[]>) => {
      state.pharmacyData = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setPharmacyData } = pharmacySlice.actions;
