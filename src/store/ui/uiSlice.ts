import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUiState {
  isModalOpen: boolean;
  loading: boolean;
}

const initialState: IUiState = {
  isModalOpen: false,
  loading: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { toggleModal } = uiSlice.actions;
