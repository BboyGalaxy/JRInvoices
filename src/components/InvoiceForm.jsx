import { Button, Container, Spacer } from "@nextui-org/react"
import InvoiceContent from "./InvoiceContent"
import InvoiceInfo from "./InvoiceInfo"

const InvoiceForm = () => {
    return (
        <Container>
            <form>
                <InvoiceInfo />
                <InvoiceContent />
                <Spacer y={2} />
                <Button type="submit" color="success" auto ghost >Print</Button>
            </form>
        </Container>
    )
}

export default InvoiceForm