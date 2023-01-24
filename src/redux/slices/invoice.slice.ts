import { IInvoice } from "../../interfaces/invoice.interface";
import { createSlice } from "@reduxjs/toolkit";
import { dataInvoices } from "../../mockData/data.invoices";

interface IState {
    invoices: IInvoice[];
    modalCreateInvoice: boolean;
}

const initialState: IState = {
    invoices: [],
    modalCreateInvoice: false
};

const invoiceSlice = createSlice({
    name: 'invoiceSlice',
    initialState,
    reducers: {
        addNewInvoice: (state, action) => {
            state.invoices = action.payload
        },

        showModalCreateInvoice: (state, action) => {
            state.modalCreateInvoice = action.payload
        }
    }
});

export const { reducer: invoiceReducer, actions: { addNewInvoice, showModalCreateInvoice } } = invoiceSlice;
export const invoiceActions = { addNewInvoice, showModalCreateInvoice };
