import { Card, Container, Text } from "@nextui-org/react"
import "./report.css"


const Report = () => {
    const invoice = JSON.parse(localStorage.getItem('invoice'))

    return (
        <Container className="report-container">
            <header>
                <Text>JR Upholstery</Text>
                <Text>3190 SW STATE ROAD 7, Suite #9, Miramar, FL 33023</Text>
                <Text>Jose Rosario 954-815-1005</Text>
                <div>
                    <Text>Interior Auto, Boat and Furniture Upholstery</Text>
                    <Text>We come to your home or office</Text>
                    <Text>Door Panels - Seats - Headliners - Middle Console</Text>
                    <Text>Carpet Replacement - Auto Upholstery Materials</Text>
                    <Text>Leather - Vinyl - Suede - Velour - Tweed</Text>
                    <Text>Free Estimate - Hablamos español</Text>
                </div>
            </header>
            <section>
                <Card variant='bordered' key={invoice.invoiceId} className="invoice-card">
                    <Card.Header>
                        <Text>Invoice</Text>
                    </Card.Header>
                    <Card.Body>
                        <Text><span>Invoice number:</span> <span>INV-{invoice.invoiceId}</span></Text>
                        <Text><span>Date:</span> <span>{new Date(invoice.invoiceDate).toLocaleDateString('en-US')}</span></Text>
                        <Text><span>Bill to:</span> <span>{invoice.customerName}</span></Text>
                    </Card.Body>
                </Card>
            </section>
            <section>
                {console.log(invoice.content)}
                {console.log(invoice.details)}
                {
                    invoice.content.map((content, index) => (
                        <table key={index} className="content-table">
                            <thead>
                                <tr>
                                    <th className="bordered">VIN: {content.vin}</th>
                                    <th className="bordered">Car Description: {content.carDescription}</th>
                                </tr>
                                <tr>
                                    <th className="bordered">Service</th>
                                    <th className="bordered">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    invoice.details.map((detail, detailIndex) => {
                                        if(detail.contentIndex === content.contentIndex){
                                            return(
                                                <tr key={detailIndex}>
                                                    <td className="bordered">{detail.service}</td>
                                                    <td className="bordered">{detail.amount}</td>
                                                </tr>
                                            )
                                        }
                                    })
                                }
                            </tbody>
                        </table>
                    ))}
            </section>
            <section className="total-section">
                <table className="total-table">
                    <tbody>
                        <tr>
                            <td className="bordered"> Subtotal:</td>
                            <td className="bordered">${invoice.subtotal}</td>
                        </tr>
                        <tr>
                            <td className="bordered">Tax:</td>
                            <td className="bordered">${invoice.tax}</td>
                        </tr>
                        <tr>
                            <td className="bordered">Total:</td>
                            <td className="bordered">{invoice.total}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <footer className="sign-form">
                <Text>PLEASE PAY FROM THIS INVOICE</Text>
                <Text>
                    A service charge of $30.00 will be charge on all Bank returned
                    checks. We are no responsible for any errors after job been approved
                    by the customer. All past due accounts subject to a minimun service
                    charge of $5.00 per month. In the event it shall become necesary to
                    collect the herein above described sums, or any part thereof, the purchaser
                    agrees to pay all the costs thereof, including attorney fees.
                </Text>
                <Text>CUSTOMER SIGNATURE: _________________________________________________</Text>
                <Text>AUTHORIZED BY: ______________________________________________________</Text>
                <Text>DATE:_______________________________</Text>
            </footer>
        </Container>
    )
}

export default Report