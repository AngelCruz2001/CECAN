import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IMedicine,
  IMedicineCatalog,
} from "interfaces/IMedicineStock.interface";
import { ITable } from "interfaces/ITable.interface";
import { dataPharmacy } from "resources/data";
import {
  IAlmacen,
  IAlmacenStore,
  IStorehouseUtility,
} from "../../interfaces/IAlmacen.interface";

export interface IRequestsState {
  requests: IAlmacen[] | null;
  activeRequest: IAlmacen | null;
  inventory: IAlmacenStore[] | null;
  units: IStorehouseUtility[] | null;
  categories: IStorehouseUtility[] | null;
  presentations: IStorehouseUtility[] | null;
  loading: boolean;
}

const initialState: IRequestsState = {
  requests: null,
  activeRequest: null,
  inventory: null,
  units: null,
  categories: null,
  presentations: null,
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
    },
    setUnits: (state, action: PayloadAction<IStorehouseUtility[]>) => {
      state.units = action.payload;
    },
    setCategories: (state, action: PayloadAction<IStorehouseUtility[]>) => {
      state.categories = action.payload;
    },
    setPresentations: (state, action: PayloadAction<IStorehouseUtility[]>) => {
      state.presentations = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const {
  setActiveRequest,
  setRequests,
  setInventory,
  setUnits,
  setCategories,
  setPresentations,
} = requestsSlice.actions;
