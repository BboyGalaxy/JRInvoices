import { Button, Container, Spacer } from "@nextui-org/react"
import InvoiceContent from "./InvoiceContent"
import InvoiceInfo from "./InvoiceInfo"
import { useSelector } from "react-redux"
import { supabase } from '../tools/client'

const InvoiceForm = () => {
    const invoice = useSelector((state) => state.invoice)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(invoice.total !== 0){
            localStorage.setItem('invoice', JSON.stringify(invoice))
            saveData(invoice)
            window.open("/InvoiceReport")
            setTimeout(location.reload(), 3000) 
        }
    }

    const saveData = async(invoice) => {
        try {
            const result = await supabase.from("invoice").insert({
                invoice_id: invoice.invoiceId,
                customer_name: invoice.customerName,
                tax: invoice.tax,
                subtotal: invoice.subtotal,
                total: invoice.total
            })
            console.log(result)
        } catch (error) {
            console.log(error)
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