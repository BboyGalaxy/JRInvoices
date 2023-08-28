
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './tools/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Report from './components/report/report.jsx'
import Report2 from './components/report/report2.jsx'
import InvoicePage from './components/InvoicePage';
import HistoryPage from './components/history/HistoryPage'
import Login from './components/login/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<InvoicePage />} />
                    <Route path='/History' element={<HistoryPage />} />
                    <Route path="/login" element={<Login />} />
                </Route>
                <Route path='/InvoiceReport' element={<Report />} />
                <Route path='/InvoiceReport2' element={<Report2 />} />

            </Routes>
        </BrowserRouter>
    </Provider>
)
