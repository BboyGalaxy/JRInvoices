import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from './InvoiceReducer'

const store = configureStore({
    reducer: {
        invoice: invoiceReducer,
    }
});

export default store