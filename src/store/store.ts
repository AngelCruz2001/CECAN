import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { historialSlice } from "./historial/historialSlice";
import { pharmacySlice } from "./pharmacy/pharmacySlice";
import { recipesSlice } from "./recipes/recipesSlice";
import { requestsSlice } from "./requests/requests.slice";

export const store = configureStore({
  reducer: {
    pharmacy: pharmacySlice.reducer,
    recipes: recipesSlice.reducer,
    historial: historialSlice.reducer,
    storehouse: requestsSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
