import { Button, Container, Spacer } from "@nextui-org/react"
import InvoiceContent from "./InvoiceContent"
import InvoiceInfo from "./InvoiceInfo"
import { useSelector } from "react-redux"

const InvoiceForm = () => {
    const invoice = useSelector((state) => state.invoice)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(invoice.total !== 0){
            localStorage.setItem('invoice', JSON.stringify(invoice))
            window.open("/InvoiceReport")
            location.reload()
        }
    }
    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <InvoiceInfo />
                <InvoiceContent />
                <Spacer y={2} />
                <Button type="submit" color="success" auto ghost>Print</Button>
            </form>
        </Container>
    )
}

export default InvoiceForm