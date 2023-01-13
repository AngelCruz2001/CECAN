import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "interfaces/IFixedAssest.interface";
import { Role } from "../../interfaces/responses/IRoles.response.inrerface";

interface IUserState {
  users: User[] | null;
  activeUser: User | null;
  roles: Role[] | null;
  loading: boolean;
}

const initialState: IUserState = {
  users: null,
  activeUser: null,
  roles: null,
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setRoles: (state, action: PayloadAction<Role[]>) => {
      state.roles = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { setUsers, setRoles } = usersSlice.actions;
