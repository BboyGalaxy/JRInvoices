import { Container, Spacer, Text } from "@nextui-org/react"
import InvoiceForm from "./InvoiceForm"

const InvoicePage = () => {
    return (
        <>
            <Container>
                <Text h2>Invoice Page</Text>
            </Container>
            <Spacer y={1}/>
            <InvoiceForm/>
        </>
    )
}

export default InvoicePage