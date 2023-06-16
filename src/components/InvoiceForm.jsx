import { Button, Container, Spacer } from "@nextui-org/react"
import InvoiceContent from "./InvoiceContent"
import InvoiceInfo from "./InvoiceInfo"
import { useSelector } from "react-redux"
import { json, renderizarFactura} from '../../public/factura'

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
            <Button onPress={() => (renderizarFactura(JSON.stringify(json)))} />
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