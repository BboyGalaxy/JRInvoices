import { Text } from "@nextui-org/react"
import "./reportHistory.css"
import dayjs from "dayjs"


const ReportHistory = () => {
    const history = JSON.parse(localStorage.getItem('history'))

    return (
        <div className="report-container">
            <header className="report-header">
                <div className="logo">
                    <img src="/logo.png" alt="logo" className="logo"/>
                </div>
                <div className="company">
                    <Text className="company-name">JR Upholstery</Text>
                    <Text className="bold">3190 SW STATE ROAD 7, Suite #9, Miramar, FL 33023</Text>
                    <Text className="bold">Jose Rosario 954-815-1005</Text>
                    <Text className="bold">Esmerlin Rosario 786-520-1934</Text>
                </div>
                <div className="company-info">
                    <Text>Interior Auto, Boat and Furniture Upholstery</Text>
                    <Text>We come to your home or office</Text>
                    <Text>Door Panels - Seats - Headliners - Middle Console - Carpet Replacement</Text>
                    <Text>Auto Upholstery Materials:</Text>
                    <Text>Leather - Vinyl - Suede - Velour - Tweed</Text>
                    <Text>Free Estimate - Hablamos español</Text>
                </div>
            </header>
            <section className="history-info">
                <Text h2 className="main-title">Invoice Report</Text>
                <div className="range">
                    <Text className="bold">From:</Text>
                    <Text>{history.from}</Text>
                    <Text className="bold">To:</Text>
                    <Text>{history.to}</Text>
                </div>
            </section>
            <section className="histoy-content">
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Invoice</th>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Subtotal</th>
                            <th>Tax</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            [...history.historyData].reverse().map((invoice, index) => (
                                <tr key={index}>
                                    <td>{invoice.invoice_id}</td>
                                    <td>{invoice.customer_name}</td>
                                    <td>{dayjs(invoice.invoiceDate).format("MM/DD/YYYY")}</td>
                                    <td>${invoice.subtotal}</td>
                                    <td>${invoice.tax}</td>
                                    <td>${invoice.total}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </section>
            
            
        </div>
    )
}

export default ReportHistory