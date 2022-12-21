import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Department, IDepartments } from "interfaces/IDepartments.interface";
import { IFixedAsset } from "interfaces/IFixedAssest.interface";

interface IFixedAssetState {
  fixedAssets: IFixedAsset[] | null;
  loading: boolean;
  departments: Department[] | null;
}

const initialState: IFixedAssetState = {
  fixedAssets: null,
  loading: false,
  departments: null,
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
  },
  extraReducers: (builder) => {},
});

export const { setFixedAssets, setDepartments, addDepartment } = fixedAssetSlice.actions;
