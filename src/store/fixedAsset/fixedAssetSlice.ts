import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFixedAsset } from "interfaces/IFixedAssest.interface";

interface IFixedAssetState {
  fixedAssets: IFixedAsset[] | null;
  loading: boolean;
}

const initialState: IFixedAssetState = {
  fixedAssets: null,
  loading: false,
};

export const fixedAssetSlice = createSlice({
  name: "fixedAsset",
  initialState,
  reducers: {
    setFixedAssets: (state, action: PayloadAction<IFixedAsset[]>) => {
      state.fixedAssets = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setFixedAssets } = fixedAssetSlice.actions;
