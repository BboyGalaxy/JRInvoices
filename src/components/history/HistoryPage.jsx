import { Button, Container, Text } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { supabase } from "../../tools/client"
import './HistoryPage.css'

const HistoryPage = () => {
    const [history, setHistory] = useState([])
    useEffect(() => {

        const fetchHistory = async () => {
            const { data, error } = await supabase
                .from('invoice')
                .select()

            if (!error) {
                setHistory(data)
            }
        }

        fetchHistory()

    }, [])

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
            console.log(data)
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
    if(!history) return <span>Cargando...</span>
    return (
        <Container>
            <Text h2>History Page</Text>
            <table className="history">
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
                        history.reverse().map((invoice, index) => (
                            <tr key={index}>
                                <td className="history-cells">{invoice.invoice_id}</td>
                                <td className="history-cells">{invoice.customer_name}</td>
                                <td className="history-cells">{new Date(invoice.invoiceDate).toLocaleDateString('en-US')}</td>
                                <td className="history-cells">{invoice.total}</td>
                                <td className="centerButton history-cells"><Button color="success" auto ghost onPress={() => handlePrint(invoice.invoice_id)}>Print</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </Container>
    )
}


export default HistoryPage