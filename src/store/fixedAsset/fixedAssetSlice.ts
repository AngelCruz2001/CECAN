import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Department, IDepartments } from "interfaces/IDepartments.interface";
import {
  FixedAssetsRequest,
  FixedAssetsRequestID,
  IFixedAsset,
} from "interfaces/IFixedAssest.interface";

interface IFixedAssetState {
  fixedAssets: IFixedAsset[] | null;
  requests: FixedAssetsRequest[] | null;
  loading: boolean;
  departments: Department[] | null;
  activeRequest: FixedAssetsRequestID | null;
}

const initialState: IFixedAssetState = {
  fixedAssets: null,
  loading: false,
  departments: null,
  requests: null,
  activeRequest: null,
};

export const fixedAssetSlice = createSlice({
  name: "fixedAsset",
  initialState,
  reducers: {
    setFixedAssets: (state, action: PayloadAction<IFixedAsset[]>) => {
      state.fixedAssets = action.payload;
    },
    setDepartments: (state, action: PayloadAction<Department[]>) => {
      state.departments = action.payload;
    },
    addDepartment: (state, action: PayloadAction<Department>) => {
      state.departments = [...state.departments, action.payload];
    },
    setFixedAssetsRequests: (
      state,
      action: PayloadAction<FixedAssetsRequest[]>
    ) => {
      state.requests = action.payload;
    },
    deleteRequestFixedAsset: (state, action: PayloadAction<string>) => {
      if (state.requests) {
        state.requests = state.requests.filter(
          (request) => request.id !== action.payload
        );
      }
    },
    setActiveFixedRequest: (
      state,
      action: PayloadAction<FixedAssetsRequestID | null>
    ) => {
      state.activeRequest = action.payload;
    },
    clearActiveFixedRequest: (state) => {
      state.activeRequest = null;
    },
  },

  extraReducers: (builder) => {},
});

export const {
  setFixedAssets,
  setDepartments,
  addDepartment,
  setFixedAssetsRequests,
  deleteRequestFixedAsset,
  setActiveFixedRequest,
  clearActiveFixedRequest,
} = fixedAssetSlice.actions;
