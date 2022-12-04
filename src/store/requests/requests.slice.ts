import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IMedicine,
  IMedicineCatalog,
} from "interfaces/IMedicineStock.interface";
import { ITable } from "interfaces/ITable.interface";
import { dataPharmacy } from "resources/data";
import { IAlmacen } from "../../interfaces/IAlmacen.interface";

export interface IRequestsState {
  requests: IAlmacen[] | null;
  activeRequest: IAlmacen | null;
  loading: boolean;
}

const initialState: IRequestsState = {
  requests: dataPharmacy.historialRequests,
  activeRequest: null,
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
  },
  extraReducers: (builder) => {},
});

export const { setActiveRequest, setRequests } = requestsSlice.actions;
