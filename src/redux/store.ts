import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { invoiceReducer } from "./slices/invoice.slice";
import { userReducer } from "./slices/user.slice";

const rootReducer = combineReducers({
    invoices: invoiceReducer,
    user: userReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];