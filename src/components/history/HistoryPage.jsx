import { Button, Container, Text } from "@nextui-org/react"
import { useEffect } from "react"
import { supabase } from "../../tools/client"
import './HistoryPage.css'
import dayjs from "dayjs"
import HistorySearch from "./HistorySearch"
import { useDispatch, useSelector } from "react-redux";
import { setHistoryData } from "../../tools/HistoryReducer"
import { fetchHistoryAsync } from "../../tools/fetchHistoryAsync";

const HistoryPage = () => {

    const dispatch = useDispatch();
    const history = useSelector((state) => state.history);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchHistoryAsync();
                dispatch(setHistoryData(data));
            } catch (error) {
                console.error("Error fetching history:", error);
            }
        };

        fetchData();
    }, []);

    const handlePrint = async (invoice_id) => {
        try {
            const { data, error } = await supabase
                .from('invoice')
                .select(`
            invoice_id,
            customer_name,
            invoiceDate,
            tax,
            subtotal,
            total,
            content!inner(
                invoice_id,
                contentIndex,
                vin,
                carDescription : car_description
                ),
                details!inner(
                    invoice_id,
                    contentIndex,
                    index,
                    service,
                    amount
                    )
                    `)
                .eq('invoice_id', invoice_id)
                .order('contentIndex', { foreignTable: 'content', ascending: true })
                .order('index', { foreignTable: 'details', ascending: true })

            if (!error) {
                const invoiceData = data[0]
                const invoice = {
                    invoiceId: invoice_id,
                    customerName: invoiceData.customer_name,
                    invoiceDate: invoiceData.invoiceDate,
                    tax: invoiceData.tax,
                    subtotal: invoiceData.subtotal,
                    total: invoiceData.total,
                    content: invoiceData.content,
                    details: invoiceData.details
                }

                localStorage.setItem('invoice', JSON.stringify(invoice))
                window.open("/InvoiceReport2")
            }
            else
                throw error
        } catch (error) {
            console.log(error)
        }

    }

    const handlePrintHistory = () => {
        if (history.historyData.length <= 0) {
            alert('There is no data to display in this date range!')
            return
        }

        localStorage.setItem('history', JSON.stringify(history))
        window.open("/ReportHistory")
    }

    if (!history.historyData) return <span>Cargando...</span>

    return (
        <Container>
            <div className="hp-div">
                <Text h2>History Page</Text>
                <Button color="success" auto ghost onPress={() => handlePrintHistory()}>Print History</Button>
            </div>
            <HistorySearch />
            {history.historyData.length > 0 ? (<table className="history" aria-label="Invoice History">
                <thead>
                    <tr>
                        <th className="history-cells">Invoice</th>
                        <th className="history-cells">Customer</th>
                        <th className="history-cells">Date</th>
                        <th className="history-cells">Total</th>
                        <th className="history-cells">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        [...history.historyData].reverse().map((invoice, index) => (
                            <tr key={index}>
                                <td className="history-cells">{invoice.invoice_id}</td>
                                <td className="history-cells">{invoice.customer_name}</td>
                                <td className="history-cells">{dayjs(invoice.invoiceDate).format('MM/DD/YYYY')}</td>
                                <td className="history-cells">{invoice.total}</td>
                                <td className="centerButton history-cells"><Button color="success" auto ghost onPress={() => handlePrint(invoice.invoice_id)}>Print</Button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>) : (
                <div className="no-history-data">
                    <span>There is no data to display in this date range!</span>
                </div>)}
        </Container>
    )
}


export default HistoryPage