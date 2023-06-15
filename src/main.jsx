
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './tools/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Report from './components/report/report.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/InvoiceReport' element={ <Report /> } />
            </Routes>
        </BrowserRouter>
    </Provider>
)
