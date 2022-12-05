import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IMedicine,
  IMedicineCatalog,
} from "interfaces/IMedicineStock.interface";
import { ITable } from "interfaces/ITable.interface";
import { dataPharmacy } from "resources/data";
import { IAlmacen, IAlmacenStore } from "../../interfaces/IAlmacen.interface";

export interface IRequestsState {
  requests: IAlmacen[] | null;
  activeRequest: IAlmacen | null;
  inventory: IAlmacenStore[] | null;
  loading: boolean;
}

const initialState: IRequestsState = {
  requests: null,
  activeRequest: null,
  inventory: null,
  loading: false,
};

export const requestsSlice = createSlice({
  name: "requests",
  initialState,
  reducers: {
    setRequests: (state, action: PayloadAction<IAlmacen[]>) => {
      state.requests = action.payload;
    },
    setActiveRequest: (state, action: PayloadAction<IAlmacen>) => {
      state.activeRequest = action.payload;
    },
    setInventory: (state, action: PayloadAction<IAlmacenStore[]>) => {
      state.inventory = action.payload;
    }
  },
  extraReducers: (builder) => {},
});

export const { setActiveRequest, setRequests, setInventory } = requestsSlice.actions;
