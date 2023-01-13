import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  token: string | null;
  user: {
    id: string;
    role: {
      id: string;
      name: string;
    };
    name: string;
    surname: string;
    full_name: string;
    email: string;
  } | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {

      console.log(action.payload)

      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
