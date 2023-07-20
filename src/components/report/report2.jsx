import { Text } from "@nextui-org/react"
import React from 'react'
import "./report2.css"


const Report2 = () => {
    const invoice = JSON.parse(localStorage.getItem('invoice'))

    return (
        <div className="report-container">
            <header className="report-header">
                <div className="logo">
                    <img src="/logo.png" alt="logo" className="logo" />
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
            <section className="invoice-info">
                <table className="invoice-card">
                    <thead>
                        <tr>
                            <th className="invoice-label">Invoice</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Invoice number:</td>
                            <td>INV-{invoice.invoiceId}</td>
                        </tr>
                        <tr>
                            <td>Date:</td>
                            <td>{new Date(invoice.invoiceDate).toLocaleDateString('en-US')}</td>
                        </tr>
                        <tr>
                            <td>Bill to:</td>
                            <td>{invoice.customerName}</td>
                        </tr>
                    </tbody>
                </table>

            </section>
            <section className="content-section">
                <table className="content-table">
                    <tbody>
                        {invoice.content.map((content, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td className="bordered half bold">VIN: {content.vin}</td>
                                    <td className="bordered half bold">Car Description: {content.carDescription}</td>
                                </tr>
                                {invoice.details.map((detail, detailIndex) => {
                                    if (detail.contentIndex === content.contentIndex) {
                                        return (
                                            <tr key={detailIndex}>
                                                <td className="bordered">{detail.service}</td>
                                                <td className="bordered">{detail.amount}</td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            <tr><td className="spacer"></td><td className="spacer"></td></tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>

            </section>

            <footer className="sign-form">
                <div className="invoice-warning">
                    <Text className="center">PLEASE PAY FROM THIS INVOICE</Text>
                    <Text>
                        A service charge of $30.00 will be charge on all Bank returned
                        checks. We are no responsible for any errors after job been approved
                        by the customer. All past due accounts subject to a minimun service
                        charge of $5.00 per month. In the event it shall become necesary to
                        collect the herein above described sums, or any part thereof, the purchaser
                        agrees to pay all the costs thereof, including attorney fees.
                    </Text>
                    <Text>CUSTOMER SIGNATURE: _____________________________________________</Text>
                    <Text>AUTHORIZED BY: __________________________________________________</Text>
                    <Text>DATE:_______________________________</Text>
                </div>
                <div className="total-section">
                    <table className="total-table">
                        <tbody>
                            <tr>
                                <td className="bordered center"> Subtotal:</td>
                                <td className="bordered center">${invoice.subtotal}</td>
                            </tr>
                            <tr>
                                <td className="bordered center">Tax:</td>
                                <td className="bordered center">${parseFloat(invoice.tax).toFixed(2)}</td>
                            </tr>
                            <tr>
                                <td className="bordered bold center">Total:</td>
                                <td className="bordered center bold">${parseFloat(invoice.total).toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </footer>
        </div>
    )
}

export default Report2