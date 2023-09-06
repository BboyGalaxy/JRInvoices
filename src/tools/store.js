import { configureStore } from '@reduxjs/toolkit'
import invoiceReducer from './InvoiceReducer'
import historyReducer from './HistoryReducer';

const store = configureStore({
    reducer: {
        invoice: invoiceReducer,
        history: historyReducer
    }
});

export default store