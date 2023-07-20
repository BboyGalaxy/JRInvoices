import { Button, Container, Spacer } from "@nextui-org/react"
import InvoiceContent from "./InvoiceContent"
import InvoiceInfo from "./InvoiceInfo"
import { useSelector } from "react-redux"
import { supabase } from '../tools/client'

const InvoiceForm = () => {
    const invoice = useSelector((state) => state.invoice)

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            if (invoice.total !== 0) {
                localStorage.setItem('invoice', JSON.stringify(invoice))
                await saveData(invoice)
                window.open("/InvoiceReport")
                location.reload()

            }
            else {
                alert("Please add content to the invoice!")
            }
        } catch (error) {
            console.log(error)
        }

    }

    const saveData = (invoice) => {
        try {
          return new Promise((resolve, reject) => {
            supabase
              .from("invoice")
              .insert({
                invoice_id: invoice.invoiceId,
                customer_name: invoice.customerName,
                tax: invoice.tax,
                subtotal: invoice.subtotal,
                total: invoice.total,
                invoiceDate: invoice.invoiceDate
              })
              .then(() => {
                const contentPromises = invoice.content.map((content) => {
                  return supabase.from("content").insert({
                    invoice_id: invoice.invoiceId,
                    contentIndex: content.contentIndex,
                    vin: content.vin,
                    car_description: content.carDescription
                  });
                });
      
                const detailsPromises = invoice.details.map((detail) => {
                  return supabase.from("details").insert({
                    invoice_id: invoice.invoiceId,
                    contentIndex: detail.contentIndex,
                    index: detail.index,
                    service: detail.service,
                    amount: detail.amount
                  });
                });
      
                return Promise.all([...contentPromises, ...detailsPromises]);
              })
              .then(() => {
                resolve();
              })
              .catch((error) => {
                reject(error);
              });
          });
        } catch (error) {
          console.log(error);
        }
      };
      


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